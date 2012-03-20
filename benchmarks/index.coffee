Benchmark = require "benchmark"
suite = new Benchmark.Suite

suite.add("levenshtein", ->
  distance.levenshtein "thing", "thingerthing"
).add("sift3", ->
  distance.sift3 "thing", "thingerthing"
).on("cycle", (event, bench) ->
  console.log String(bench)
).on("complete", ->
  console.log "Fastest is " + @filter("fastest").pluck("name")
).run async: true
