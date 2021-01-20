import { shortenText } from '../utils/functions';
import { wordCount, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';

test('Test if shorten text will not alter string under 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(shortText.length)
});

test('Test if shortenText will alter text longer than 100 character and add ellipsis on end', () => {
    const temp = shortenText(longText)
    expect(temp).not.toHaveLength(longText.length);
    expect(temp.slice(-3)).toBe('...');
});

test('Test if wordCount returns correct total word count of string', () => {
    expect(wordCount(posts)).toBe(233);
});

test('Checks first post array item has the currect displayname', () => {
    const temp = attachUserName(users, posts)
    expect(temp[0].displayName).toBe('Hello World');
})

test('Checks if posts with no users were filtered out of attachUserName function', () => {
    const temp = attachUserName(users, posts)
    const result = temp.some(post => !post.displayName)
    expect(result).toBeFalsy()
})

