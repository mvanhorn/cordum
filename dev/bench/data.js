window.BENCHMARK_DATA = {
  "lastUpdate": 1773671264809,
  "repoUrl": "https://github.com/cordum-io/cordum",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "76696443+yaront1111@users.noreply.github.com",
            "name": "Yaron",
            "username": "yaront1111"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f45708aafb695fb030f63efebca5ae0d406084b",
          "message": "Merge pull request #123 from cordum-io/feat/horizontal-scaling\n\nfix: skip NATS TLS env vars for plain nats:// connections",
          "timestamp": "2026-02-21T22:49:39+02:00",
          "tree_id": "88ead3a3a5a6218f5e34f633dca0f5c47e235409",
          "url": "https://github.com/cordum-io/cordum/commit/5f45708aafb695fb030f63efebca5ae0d406084b"
        },
        "date": 1771857629885,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket",
            "value": 20591,
            "unit": "ns/op\t    5464 B/op\t      87 allocs/op",
            "extra": "58714 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket - ns/op",
            "value": 20591,
            "unit": "ns/op",
            "extra": "58714 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket - B/op",
            "value": 5464,
            "unit": "B/op",
            "extra": "58714 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "58714 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat",
            "value": 3131,
            "unit": "ns/op\t     512 B/op\t      15 allocs/op",
            "extra": "401144 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat - ns/op",
            "value": 3131,
            "unit": "ns/op",
            "extra": "401144 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat - B/op",
            "value": 512,
            "unit": "B/op",
            "extra": "401144 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "401144 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded",
            "value": 24823,
            "unit": "ns/op\t    6015 B/op\t      95 allocs/op",
            "extra": "47895 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded - ns/op",
            "value": 24823,
            "unit": "ns/op",
            "extra": "47895 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded - B/op",
            "value": 6015,
            "unit": "B/op",
            "extra": "47895 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded - allocs/op",
            "value": 95,
            "unit": "allocs/op",
            "extra": "47895 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick",
            "value": 1568119,
            "unit": "ns/op\t  585564 B/op\t    8515 allocs/op",
            "extra": "765 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick - ns/op",
            "value": 1568119,
            "unit": "ns/op",
            "extra": "765 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick - B/op",
            "value": 585564,
            "unit": "B/op",
            "extra": "765 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick - allocs/op",
            "value": 8515,
            "unit": "allocs/op",
            "extra": "765 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100",
            "value": 7715,
            "unit": "ns/op\t     568 B/op\t      20 allocs/op",
            "extra": "156315 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 - ns/op",
            "value": 7715,
            "unit": "ns/op",
            "extra": "156315 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "156315 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "156315 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000",
            "value": 43516,
            "unit": "ns/op\t     574 B/op\t      20 allocs/op",
            "extra": "27711 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 - ns/op",
            "value": 43516,
            "unit": "ns/op",
            "extra": "27711 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 - B/op",
            "value": 574,
            "unit": "B/op",
            "extra": "27711 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "27711 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76696443+yaront1111@users.noreply.github.com",
            "name": "Yaron",
            "username": "yaront1111"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a235e17eb66acb342e91e9ae43b76375aac870e7",
          "message": "fix: dashboard Docker CI verify fails on missing upstream host\n\nNginx resolves all upstream hostnames at startup. In CI the\ncordum-api-gateway host doesn't exist, causing nginx to crash\nbefore serving any request. Add --add-host to provide a dummy\nresolution and hit /healthz instead of / for the smoke check.\n\nCo-authored-by: yaront1111 <yaront1111@users.noreply.github.com>",
          "timestamp": "2026-02-25T17:07:58+02:00",
          "tree_id": "788632b91f3618c5f73cbc8869bdbe0382877360",
          "url": "https://github.com/cordum-io/cordum/commit/a235e17eb66acb342e91e9ae43b76375aac870e7"
        },
        "date": 1772032288569,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket",
            "value": 18886,
            "unit": "ns/op\t    5464 B/op\t      87 allocs/op",
            "extra": "58506 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket - ns/op",
            "value": 18886,
            "unit": "ns/op",
            "extra": "58506 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket - B/op",
            "value": 5464,
            "unit": "B/op",
            "extra": "58506 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "58506 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat",
            "value": 2931,
            "unit": "ns/op\t     512 B/op\t      15 allocs/op",
            "extra": "397874 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat - ns/op",
            "value": 2931,
            "unit": "ns/op",
            "extra": "397874 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat - B/op",
            "value": 512,
            "unit": "B/op",
            "extra": "397874 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "397874 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded",
            "value": 24010,
            "unit": "ns/op\t    6008 B/op\t      95 allocs/op",
            "extra": "49413 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded - ns/op",
            "value": 24010,
            "unit": "ns/op",
            "extra": "49413 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded - B/op",
            "value": 6008,
            "unit": "B/op",
            "extra": "49413 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded - allocs/op",
            "value": 95,
            "unit": "allocs/op",
            "extra": "49413 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick",
            "value": 1504045,
            "unit": "ns/op\t  585558 B/op\t    8515 allocs/op",
            "extra": "799 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick - ns/op",
            "value": 1504045,
            "unit": "ns/op",
            "extra": "799 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick - B/op",
            "value": 585558,
            "unit": "B/op",
            "extra": "799 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick - allocs/op",
            "value": 8515,
            "unit": "allocs/op",
            "extra": "799 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100",
            "value": 7785,
            "unit": "ns/op\t     568 B/op\t      20 allocs/op",
            "extra": "155214 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 - ns/op",
            "value": 7785,
            "unit": "ns/op",
            "extra": "155214 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "155214 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "155214 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000",
            "value": 43105,
            "unit": "ns/op\t     575 B/op\t      20 allocs/op",
            "extra": "27499 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 - ns/op",
            "value": 43105,
            "unit": "ns/op",
            "extra": "27499 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 - B/op",
            "value": 575,
            "unit": "B/op",
            "extra": "27499 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "27499 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76696443+yaront1111@users.noreply.github.com",
            "name": "Yaron",
            "username": "yaront1111"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a99c4c0eefcee1cdc487ac4e9f7564e06f4cb251",
          "message": "Merge pull request #130 from cordum-io/yaront1111-patch-1\n\nUpdate images in README for visual enhancements",
          "timestamp": "2026-02-26T01:20:09+02:00",
          "tree_id": "a8d2d2225a9c2fd6a0ff259ba45a8d2f62e12146",
          "url": "https://github.com/cordum-io/cordum/commit/a99c4c0eefcee1cdc487ac4e9f7564e06f4cb251"
        },
        "date": 1772061851552,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket",
            "value": 21369,
            "unit": "ns/op\t    5336 B/op\t      87 allocs/op",
            "extra": "52435 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket - ns/op",
            "value": 21369,
            "unit": "ns/op",
            "extra": "52435 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket - B/op",
            "value": 5336,
            "unit": "B/op",
            "extra": "52435 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "52435 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat",
            "value": 3044,
            "unit": "ns/op\t     512 B/op\t      15 allocs/op",
            "extra": "385864 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat - ns/op",
            "value": 3044,
            "unit": "ns/op",
            "extra": "385864 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat - B/op",
            "value": 512,
            "unit": "B/op",
            "extra": "385864 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "385864 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded",
            "value": 26708,
            "unit": "ns/op\t    6049 B/op\t      95 allocs/op",
            "extra": "42968 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded - ns/op",
            "value": 26708,
            "unit": "ns/op",
            "extra": "42968 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded - B/op",
            "value": 6049,
            "unit": "B/op",
            "extra": "42968 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded - allocs/op",
            "value": 95,
            "unit": "allocs/op",
            "extra": "42968 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick",
            "value": 1552056,
            "unit": "ns/op\t  585547 B/op\t    8514 allocs/op",
            "extra": "732 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick - ns/op",
            "value": 1552056,
            "unit": "ns/op",
            "extra": "732 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick - B/op",
            "value": 585547,
            "unit": "B/op",
            "extra": "732 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick - allocs/op",
            "value": 8514,
            "unit": "allocs/op",
            "extra": "732 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100",
            "value": 7829,
            "unit": "ns/op\t     568 B/op\t      20 allocs/op",
            "extra": "154642 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 - ns/op",
            "value": 7829,
            "unit": "ns/op",
            "extra": "154642 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "154642 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "154642 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000",
            "value": 43727,
            "unit": "ns/op\t     572 B/op\t      20 allocs/op",
            "extra": "27453 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 - ns/op",
            "value": 43727,
            "unit": "ns/op",
            "extra": "27453 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 - B/op",
            "value": 572,
            "unit": "B/op",
            "extra": "27453 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "27453 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76696443+yaront1111@users.noreply.github.com",
            "name": "Yaron",
            "username": "yaront1111"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8e439efb301c37232cb7cc794cff896df4cfa1",
          "message": "Merge pull request #132 from cordum-io/dependabot/npm_and_yarn/dashboard/rollup-4.59.0\n\nbuild(deps): bump rollup from 4.54.0 to 4.59.0 in /dashboard",
          "timestamp": "2026-03-03T15:16:32+02:00",
          "tree_id": "3da9033ceb474ce0e64d7dc5cd278bd28e467f44",
          "url": "https://github.com/cordum-io/cordum/commit/bd8e439efb301c37232cb7cc794cff896df4cfa1"
        },
        "date": 1772544028839,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 21362,
            "unit": "ns/op\t    5391 B/op\t      87 allocs/op",
            "extra": "56724 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 21362,
            "unit": "ns/op",
            "extra": "56724 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5391,
            "unit": "B/op",
            "extra": "56724 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 87,
            "unit": "allocs/op",
            "extra": "56724 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 3249,
            "unit": "ns/op\t     512 B/op\t      15 allocs/op",
            "extra": "387741 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 3249,
            "unit": "ns/op",
            "extra": "387741 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 512,
            "unit": "B/op",
            "extra": "387741 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "387741 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 26030,
            "unit": "ns/op\t    6041 B/op\t      95 allocs/op",
            "extra": "44088 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 26030,
            "unit": "ns/op",
            "extra": "44088 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 6041,
            "unit": "B/op",
            "extra": "44088 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 95,
            "unit": "allocs/op",
            "extra": "44088 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1537582,
            "unit": "ns/op\t  585545 B/op\t    8514 allocs/op",
            "extra": "771 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1537582,
            "unit": "ns/op",
            "extra": "771 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 585545,
            "unit": "B/op",
            "extra": "771 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 8514,
            "unit": "allocs/op",
            "extra": "771 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 7600,
            "unit": "ns/op\t     568 B/op\t      20 allocs/op",
            "extra": "154909 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 7600,
            "unit": "ns/op",
            "extra": "154909 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "154909 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "154909 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 42374,
            "unit": "ns/op\t     576 B/op\t      20 allocs/op",
            "extra": "28344 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 42374,
            "unit": "ns/op",
            "extra": "28344 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 576,
            "unit": "B/op",
            "extra": "28344 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "28344 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76696443+yaront1111@users.noreply.github.com",
            "name": "Yaron",
            "username": "yaront1111"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b14b62495dc42bc99e764590686202926cc6c9b",
          "message": "Merge pull request #133 from cordum-io/feat/dashboard-v2\n\nfeat: dashboard v2 — full rebuild with warm Mac theme",
          "timestamp": "2026-03-10T10:44:37+02:00",
          "tree_id": "9ae75dfa563cdab2500a9013fd905781f20ddfd0",
          "url": "https://github.com/cordum-io/cordum/commit/8b14b62495dc42bc99e764590686202926cc6c9b"
        },
        "date": 1773132559723,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 22601,
            "unit": "ns/op\t    5840 B/op\t      93 allocs/op",
            "extra": "55677 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 22601,
            "unit": "ns/op",
            "extra": "55677 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5840,
            "unit": "B/op",
            "extra": "55677 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "55677 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 3010,
            "unit": "ns/op\t     512 B/op\t      15 allocs/op",
            "extra": "383931 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 3010,
            "unit": "ns/op",
            "extra": "383931 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 512,
            "unit": "B/op",
            "extra": "383931 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "383931 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 25644,
            "unit": "ns/op\t    6519 B/op\t     101 allocs/op",
            "extra": "45114 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 25644,
            "unit": "ns/op",
            "extra": "45114 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 6519,
            "unit": "B/op",
            "extra": "45114 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 101,
            "unit": "allocs/op",
            "extra": "45114 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1701872,
            "unit": "ns/op\t  585611 B/op\t    8515 allocs/op",
            "extra": "774 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1701872,
            "unit": "ns/op",
            "extra": "774 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 585611,
            "unit": "B/op",
            "extra": "774 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 8515,
            "unit": "allocs/op",
            "extra": "774 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 7715,
            "unit": "ns/op\t     568 B/op\t      20 allocs/op",
            "extra": "152710 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 7715,
            "unit": "ns/op",
            "extra": "152710 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "152710 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "152710 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 43615,
            "unit": "ns/op\t     576 B/op\t      20 allocs/op",
            "extra": "27708 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 43615,
            "unit": "ns/op",
            "extra": "27708 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 576,
            "unit": "B/op",
            "extra": "27708 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "27708 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76696443+yaront1111@users.noreply.github.com",
            "name": "Yaron",
            "username": "yaront1111"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c5503b772fc6d5e2410b681cd630619fcb3cf36",
          "message": "Merge pull request #134 from cordum-io/dependabot/npm_and_yarn/dashboard/multi-0a2fecb91f\n\nbuild(deps): bump esbuild and vitest in /dashboard",
          "timestamp": "2026-03-10T11:04:10+02:00",
          "tree_id": "f7b518a858ba009c68a648ce9feaca3e5c330a37",
          "url": "https://github.com/cordum-io/cordum/commit/5c5503b772fc6d5e2410b681cd630619fcb3cf36"
        },
        "date": 1773133727646,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 22675,
            "unit": "ns/op\t    5819 B/op\t      93 allocs/op",
            "extra": "52686 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 22675,
            "unit": "ns/op",
            "extra": "52686 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5819,
            "unit": "B/op",
            "extra": "52686 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "52686 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 2982,
            "unit": "ns/op\t     512 B/op\t      15 allocs/op",
            "extra": "398984 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 2982,
            "unit": "ns/op",
            "extra": "398984 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 512,
            "unit": "B/op",
            "extra": "398984 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "398984 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 28163,
            "unit": "ns/op\t    6533 B/op\t     101 allocs/op",
            "extra": "43408 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 28163,
            "unit": "ns/op",
            "extra": "43408 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 6533,
            "unit": "B/op",
            "extra": "43408 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 101,
            "unit": "allocs/op",
            "extra": "43408 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1555973,
            "unit": "ns/op\t  585592 B/op\t    8515 allocs/op",
            "extra": "786 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1555973,
            "unit": "ns/op",
            "extra": "786 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 585592,
            "unit": "B/op",
            "extra": "786 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 8515,
            "unit": "allocs/op",
            "extra": "786 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 7706,
            "unit": "ns/op\t     568 B/op\t      20 allocs/op",
            "extra": "152898 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 7706,
            "unit": "ns/op",
            "extra": "152898 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "152898 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "152898 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 42872,
            "unit": "ns/op\t     575 B/op\t      20 allocs/op",
            "extra": "27931 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 42872,
            "unit": "ns/op",
            "extra": "27931 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 575,
            "unit": "B/op",
            "extra": "27931 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "27931 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76696443+yaront1111@users.noreply.github.com",
            "name": "Yaron",
            "username": "yaront1111"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71b50dc430b21e4babc5fb9d34024333965b64c5",
          "message": "Merge pull request #136 from cordum-io/feat/mkt-fleet-v2-platform-fixes\n\nfix: marketing agent fleet v2 platform fixes",
          "timestamp": "2026-03-16T16:23:20+02:00",
          "tree_id": "66cdf9b34b78449e7c0cd3fd190b72f0f8ed8ae1",
          "url": "https://github.com/cordum-io/cordum/commit/71b50dc430b21e4babc5fb9d34024333965b64c5"
        },
        "date": 1773671264287,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 19877,
            "unit": "ns/op\t    5964 B/op\t      93 allocs/op",
            "extra": "58617 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 19877,
            "unit": "ns/op",
            "extra": "58617 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5964,
            "unit": "B/op",
            "extra": "58617 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "58617 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 2865,
            "unit": "ns/op\t     512 B/op\t      15 allocs/op",
            "extra": "398730 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 2865,
            "unit": "ns/op",
            "extra": "398730 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 512,
            "unit": "B/op",
            "extra": "398730 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "398730 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 25652,
            "unit": "ns/op\t    6532 B/op\t     101 allocs/op",
            "extra": "44306 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 25652,
            "unit": "ns/op",
            "extra": "44306 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 6532,
            "unit": "B/op",
            "extra": "44306 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 101,
            "unit": "allocs/op",
            "extra": "44306 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1520098,
            "unit": "ns/op\t  585818 B/op\t    8515 allocs/op",
            "extra": "819 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1520098,
            "unit": "ns/op",
            "extra": "819 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 585818,
            "unit": "B/op",
            "extra": "819 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 8515,
            "unit": "allocs/op",
            "extra": "819 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 7665,
            "unit": "ns/op\t     568 B/op\t      20 allocs/op",
            "extra": "144654 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 7665,
            "unit": "ns/op",
            "extra": "144654 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "144654 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "144654 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 41203,
            "unit": "ns/op\t     573 B/op\t      20 allocs/op",
            "extra": "29622 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 41203,
            "unit": "ns/op",
            "extra": "29622 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 573,
            "unit": "B/op",
            "extra": "29622 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "29622 times\n4 procs"
          }
        ]
      }
    ]
  }
}