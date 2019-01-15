import test from 'ava';
import pwaIconList from '.';

test('length of result array', t => {
	t.true(pwaIconList().length === 8);
});
