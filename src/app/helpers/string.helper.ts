import {isArray} from "util";
export class StringHelper {
  public static urlencode(url: string) {
    return url.replace(' ', '~');
  }

  public static http_build_query(params) {
    if (typeof params === 'undefined' || typeof params !== 'object') {
      params = {};
      return params;
    }

    var query = '?';
    var index = 0;

    for (var i in params) {
      var param = i;
      var value = params[i];
      if ((value == null) || (value == [])) { continue; }
      index++;
      if (isArray(value)) {
        for(var j in value) {
          if (index == 1) {
            query += i + '[]=' + value[j];
          } else {

            query += '&' + i + '[]=' + value[j];
          }
        }
      } else {
        if (index == 1) {
          query += param + '=' + value;
        } else {

          query += '&' + param + '=' + value;
        }
      }

    }

    return query;
  }

  public static number_format( number: any, decimals: number = 0, dec_point: string = '.', thousands_sep: string = ' ' ) : string {
    var decimal, decimalPoint, negative;
    negative = number < 0 ? '-' : '';
    number = Math.abs(number);
    decimal = ((number - parseInt(number)).toFixed(decimals)).slice(2);
    number = ("" + (parseInt(number.toFixed(decimals)))).split('').reverse().join('').replace(/...(?!$)/g, "$&" + (thousands_sep.replace(/\$/g, '$$$$'))).split('').reverse().join('');
    decimalPoint = decimals !== 0 ? dec_point : '';
    return "" + negative + number + decimalPoint + decimal;
  }

}