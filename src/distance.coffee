module.exports = class distance

  @sift3: (s1, s2) ->
    if not s1? or s1.length is 0
      if not s2? or s2.length is 0
        return 0
      else
        return s2.length
    return s1.length  if not s2? or s2.length is 0
    c = offset1 = offset2 = lcs = 0
    maxOffset = 5
    while (c + offset1 < s1.length) and (c + offset2 < s2.length)
      if s1[c + offset1] is s2[c + offset2]
        lcs++
      else
        offset1 = offset2 = i = 0

        while i < maxOffset
          if (c + i < s1.length) and (s1[c + i] is s2[c])
            offset1 = i
            break
          if (c + i < s2.length) and (s1[c] is s2[c + i])
            offset2 = i
            break
          i++
      c++
    (s1.length + s2.length) / 2 - lcs

  @levenshtein: (s, t) ->
    n = s.length
    m = t.length
    return m if n is 0
    return n if m is 0

    d       = []
    d[i]    = [] for i in [0..n]
    d[i][0] = i  for i in [0..n]
    d[0][j] = j  for j in [0..m]

    for c1, i in s
      for c2, j in t
        cost = if c1 is c2 then 0 else 1
        d[i+1][j+1] = Math.min d[i][j+1]+1, d[i+1][j]+1, d[i][j] + cost

    d[n][m]
