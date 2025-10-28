//Write a regex that can extract URLs from text. URLs can start with
//http:// or https://. Use it with the match method to perform the
//extraction.

let message: string = `there are multiple useful Web sites for typescript programmers to get help
Such as https://developer.mozilla.org which is the primary source of information on JS.
You should also check https://typescriptlang.org which has comprehensive information
on the TS language and tooling.`;

// Regex to match http:// or https:// followed by non-whitespace characters
const regex = /(https?:\/\/\S+)/g;

const urls = message.match(regex);

if (urls) {
  urls.forEach(url => console.log(url));
}

