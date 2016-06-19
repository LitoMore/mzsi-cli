import test from 'ava';
import execa from 'execa';
import {version} from './package.json';

test('should be return a correct version when use --version parameter', async t => {
  t.is(await execa.stdout('./cli.js', ['--version']), version);
});

test('should be return an exception when the day parameter is not a number', t => {
  t.throws(execa.stdout('./cli.js', ['abc', '03']), /Please, the day must be a number./);
});

test('should be return an exception when the month parameter is not a number', t => {
  t.throws(execa.stdout('./cli.js', ['05', 'abc']), /Please, the month must be a number./);
});

test('should be works with a valid arguments', async t => {
  t.regex(await execa.stdout('./cli.js', ['07', '07']), /Cancer/);
});
