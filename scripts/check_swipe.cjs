// Exercise the actual React pointer handlers without needing a touch device.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('typescript');
const source = fs.readFileSync('src/Presentation.tsx', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;

function setup(current = 2) {
  const changes = [];
  let hook = 0;
  const jsx = (type, props) => ({ type, props });
  const react = {
    useState(initial) { const slot = hook++; return [typeof initial === 'function' ? initial() : initial, next => { if (slot === 0) changes.push(next); }]; },
    useRef: value => ({ current: value }), useCallback: fn => fn, useEffect() {},
  };
  const module = { exports: {} };
  const context = { exports: module.exports, window: { location: { hash: `#slide=${current + 1}` } }, require(name) {
    if (name === 'react') return react;
    if (name === 'react/jsx-runtime') return { jsx, jsxs: jsx };
    if (name === 'framer-motion') return { motion: { div: 'div', button: 'button' }, AnimatePresence: 'presence' };
    if (name === '@/slides') return { SLIDES: Array.from({ length: 37 }, () => ({ component: 'slide', label: 'Lesson' })) };
    if (name === '@/lib/ThemeContext') return { useTheme: () => ({ isDark: false, toggleTheme() {} }) };
    return {};
  }};
  vm.runInNewContext(compiled, context);
  const tree = module.exports.Presentation();
  const area = tree.props.children.find(child => child?.props?.className?.includes('slide-touch-area'));
  assert.ok(area, 'Touch handlers must be attached to the slide area');
  return { handlers: area.props, changes };
}
function pointer(x, y, options = {}) {
  return { pointerId: 1, pointerType: 'touch', isPrimary: true, clientX: x, clientY: y, target: { closest: () => options.control ? {} : null }, ...options };
}
function gesture(start, move, end, options = {}, current = 2) {
  const { handlers, changes } = setup(current);
  handlers.onPointerDown(pointer(...start, options));
  if (move) handlers.onPointerMove(pointer(...move, options));
  if (options.cancel) handlers.onPointerCancel();
  handlers.onPointerUp(pointer(...end, options));
  return changes;
}
assert.deepEqual(gesture([260, 100], [170, 105], [90, 110]), [3], 'Swipe left advances');
assert.deepEqual(gesture([90, 100], [170, 105], [260, 110]), [1], 'Swipe right goes back');
assert.deepEqual(gesture([200, 100], [205, 190], [80, 250]), [], 'Scrolling stays on the slide');
assert.deepEqual(gesture([200, 100], null, [165, 103]), [], 'A short tap/drag does not navigate');
assert.deepEqual(gesture([200, 100], [100, 100], [20, 100], { control: true }), [], 'Controls keep their gestures');
assert.deepEqual(gesture([200, 100], [100, 100], [20, 100], { cancel: true }), [], 'Cancelled gestures do not navigate');
assert.deepEqual(gesture([200, 100], [100, 100], [20, 100], { isPrimary: false }), [], 'Secondary fingers do not navigate');
assert.deepEqual(gesture([200, 100], [100, 100], [20, 100], { pointerType: 'mouse' }), [], 'Mouse dragging does not navigate');
assert.deepEqual(gesture([90, 100], [170, 100], [260, 100], {}, 0), [], 'First slide stays in bounds');
assert.deepEqual(gesture([260, 100], [170, 100], [90, 100], {}, 36), [], 'Last slide stays in bounds');
console.log('PASS: 10 swipe checks (directions, scrolling, taps, controls, cancellation, multiple fingers, mouse and boundaries).');
