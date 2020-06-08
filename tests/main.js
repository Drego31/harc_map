const tests = require('./tests');

for (const test in tests) {
  let success = false;
  try { success = tests[test](); } catch (exception) {
    console.error(
      'test not pass: ' + test +
      ': \t' + exception);

    continue;
  }

  if (!success) {
    console.error('test not pass: ' + test);
  }
}
