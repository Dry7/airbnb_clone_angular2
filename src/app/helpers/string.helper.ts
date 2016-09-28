export class StringHelper {
  public static urlencode(url: string) {
    return url.replace(' ', '~');
  }
}