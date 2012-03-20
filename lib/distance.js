(function() {
  var distance;
  module.exports = distance = (function() {
    function distance() {}
    distance.sift3 = function(s1, s2) {
      var c, i, lcs, maxOffset, offset1, offset2;
      if (!(s1 != null) || s1.length === 0) {
        if (!(s2 != null) || s2.length === 0) {
          return 0;
        } else {
          return s2.length;
        }
      }
      if (!(s2 != null) || s2.length === 0) {
        return s1.length;
      }
      c = offset1 = offset2 = lcs = 0;
      maxOffset = 5;
      while ((c + offset1 < s1.length) && (c + offset2 < s2.length)) {
        if (s1[c + offset1] === s2[c + offset2]) {
          lcs++;
        } else {
          offset1 = offset2 = i = 0;
          while (i < maxOffset) {
            if ((c + i < s1.length) && (s1[c + i] === s2[c])) {
              offset1 = i;
              break;
            }
            if ((c + i < s2.length) && (s1[c] === s2[c + i])) {
              offset2 = i;
              break;
            }
            i++;
          }
        }
        c++;
      }
      return (s1.length + s2.length) / 2 - lcs;
    };
    distance.levenshtein = function(s, t) {
      var c1, c2, cost, d, i, j, m, n, _len, _len2;
      n = s.length;
      m = t.length;
      if (n === 0) {
        return m;
      }
      if (m === 0) {
        return n;
      }
      d = [];
      for (i = 0; 0 <= n ? i <= n : i >= n; 0 <= n ? i++ : i--) {
        d[i] = [];
      }
      for (i = 0; 0 <= n ? i <= n : i >= n; 0 <= n ? i++ : i--) {
        d[i][0] = i;
      }
      for (j = 0; 0 <= m ? j <= m : j >= m; 0 <= m ? j++ : j--) {
        d[0][j] = j;
      }
      for (i = 0, _len = s.length; i < _len; i++) {
        c1 = s[i];
        for (j = 0, _len2 = t.length; j < _len2; j++) {
          c2 = t[j];
          cost = c1 === c2 ? 0 : 1;
          d[i + 1][j + 1] = Math.min(d[i][j + 1] + 1, d[i + 1][j] + 1, d[i][j] + cost);
        }
      }
      return d[n][m];
    };
    return distance;
  })();
}).call(this);
