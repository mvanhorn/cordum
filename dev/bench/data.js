window.BENCHMARK_DATA = {
  "lastUpdate": 1774742936752,
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
          "id": "2498a594fc45e68372176274f7a1961b74b497fe",
          "message": "fix: star tracker cross-run artifact download (#138)\n\nactions/download-artifact@v4 only downloads from the current run\nby default. Use gh api to find and download the latest snapshot\nartifact from any previous run.\n\nCo-authored-by: yaront1111 <yaront1111@users.noreply.github.com>",
          "timestamp": "2026-03-16T16:56:12+02:00",
          "tree_id": "aec4c96c4d69b4b84218568eb6bc9cf98841e016",
          "url": "https://github.com/cordum-io/cordum/commit/2498a594fc45e68372176274f7a1961b74b497fe"
        },
        "date": 1773673255085,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 22000,
            "unit": "ns/op\t    5871 B/op\t      93 allocs/op",
            "extra": "56503 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 22000,
            "unit": "ns/op",
            "extra": "56503 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5871,
            "unit": "B/op",
            "extra": "56503 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "56503 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 2874,
            "unit": "ns/op\t     512 B/op\t      15 allocs/op",
            "extra": "416402 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 2874,
            "unit": "ns/op",
            "extra": "416402 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 512,
            "unit": "B/op",
            "extra": "416402 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "416402 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 26984,
            "unit": "ns/op\t    6537 B/op\t     101 allocs/op",
            "extra": "42982 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 26984,
            "unit": "ns/op",
            "extra": "42982 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 6537,
            "unit": "B/op",
            "extra": "42982 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 101,
            "unit": "allocs/op",
            "extra": "42982 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1490067,
            "unit": "ns/op\t  585819 B/op\t    8515 allocs/op",
            "extra": "798 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1490067,
            "unit": "ns/op",
            "extra": "798 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 585819,
            "unit": "B/op",
            "extra": "798 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 8515,
            "unit": "allocs/op",
            "extra": "798 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 7163,
            "unit": "ns/op\t     568 B/op\t      20 allocs/op",
            "extra": "176082 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 7163,
            "unit": "ns/op",
            "extra": "176082 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "176082 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "176082 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 35229,
            "unit": "ns/op\t     576 B/op\t      20 allocs/op",
            "extra": "34207 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 35229,
            "unit": "ns/op",
            "extra": "34207 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 576,
            "unit": "B/op",
            "extra": "34207 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "34207 times\n4 procs"
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
          "id": "4b385283c7e418f2e155d72120be413150404194",
          "message": "Merge pull request #140 from cordum-io/dependabot/npm_and_yarn/dashboard/jspdf-4.2.1\n\nbuild(deps): bump jspdf from 4.2.0 to 4.2.1 in /dashboard",
          "timestamp": "2026-03-18T15:27:52+02:00",
          "tree_id": "b389f65902f3d8ec7bfbc6031adc3708ffcf7171",
          "url": "https://github.com/cordum-io/cordum/commit/4b385283c7e418f2e155d72120be413150404194"
        },
        "date": 1773840738180,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 20773,
            "unit": "ns/op\t    5956 B/op\t      93 allocs/op",
            "extra": "58905 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 20773,
            "unit": "ns/op",
            "extra": "58905 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5956,
            "unit": "B/op",
            "extra": "58905 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "58905 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 2878,
            "unit": "ns/op\t     512 B/op\t      15 allocs/op",
            "extra": "415256 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 2878,
            "unit": "ns/op",
            "extra": "415256 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 512,
            "unit": "B/op",
            "extra": "415256 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "415256 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 26417,
            "unit": "ns/op\t    6505 B/op\t     101 allocs/op",
            "extra": "47952 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 26417,
            "unit": "ns/op",
            "extra": "47952 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 6505,
            "unit": "B/op",
            "extra": "47952 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 101,
            "unit": "allocs/op",
            "extra": "47952 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1481642,
            "unit": "ns/op\t  585831 B/op\t    8515 allocs/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1481642,
            "unit": "ns/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 585831,
            "unit": "B/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 8515,
            "unit": "allocs/op",
            "extra": "811 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 6714,
            "unit": "ns/op\t     568 B/op\t      20 allocs/op",
            "extra": "179463 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 6714,
            "unit": "ns/op",
            "extra": "179463 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "179463 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "179463 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 35718,
            "unit": "ns/op\t     576 B/op\t      20 allocs/op",
            "extra": "34280 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 35718,
            "unit": "ns/op",
            "extra": "34280 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 576,
            "unit": "B/op",
            "extra": "34280 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "34280 times\n4 procs"
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
          "id": "0e75b73accda86bd0d565d1043b80d84fa06a756",
          "message": "Merge pull request #137 from cordum-io/dependabot/npm_and_yarn/dashboard/undici-7.24.4\n\nbuild(deps): bump undici from 7.22.0 to 7.24.4 in /dashboard",
          "timestamp": "2026-03-18T16:00:08+02:00",
          "tree_id": "d7ae77296e4849ab6b4516f9aa9d5da15fb5ac37",
          "url": "https://github.com/cordum-io/cordum/commit/0e75b73accda86bd0d565d1043b80d84fa06a756"
        },
        "date": 1773842692639,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 21832,
            "unit": "ns/op\t    5936 B/op\t      93 allocs/op",
            "extra": "58189 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 21832,
            "unit": "ns/op",
            "extra": "58189 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5936,
            "unit": "B/op",
            "extra": "58189 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "58189 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 3031,
            "unit": "ns/op\t     512 B/op\t      15 allocs/op",
            "extra": "406107 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 3031,
            "unit": "ns/op",
            "extra": "406107 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 512,
            "unit": "B/op",
            "extra": "406107 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "406107 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 25243,
            "unit": "ns/op\t    6514 B/op\t     101 allocs/op",
            "extra": "46330 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 25243,
            "unit": "ns/op",
            "extra": "46330 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 6514,
            "unit": "B/op",
            "extra": "46330 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 101,
            "unit": "allocs/op",
            "extra": "46330 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1562715,
            "unit": "ns/op\t  585793 B/op\t    8514 allocs/op",
            "extra": "770 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1562715,
            "unit": "ns/op",
            "extra": "770 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 585793,
            "unit": "B/op",
            "extra": "770 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 8514,
            "unit": "allocs/op",
            "extra": "770 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 7757,
            "unit": "ns/op\t     568 B/op\t      20 allocs/op",
            "extra": "153702 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 7757,
            "unit": "ns/op",
            "extra": "153702 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "153702 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "153702 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 43173,
            "unit": "ns/op\t     573 B/op\t      20 allocs/op",
            "extra": "27562 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 43173,
            "unit": "ns/op",
            "extra": "27562 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 573,
            "unit": "B/op",
            "extra": "27562 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "27562 times\n4 procs"
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
          "id": "896a880aaf395b1bf6080ae5c112770fb37d17ef",
          "message": "Merge pull request #139 from cordum-io/feat/quickstart-zero-config-and-slog\n\nfeat: zero-config quickstart + slog structured logging",
          "timestamp": "2026-03-18T16:08:50+02:00",
          "tree_id": "5aaac035dc958d5c8d0147895c666a6094743d08",
          "url": "https://github.com/cordum-io/cordum/commit/896a880aaf395b1bf6080ae5c112770fb37d17ef"
        },
        "date": 1773843206603,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 19484,
            "unit": "ns/op\t    5349 B/op\t      76 allocs/op",
            "extra": "58237 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 19484,
            "unit": "ns/op",
            "extra": "58237 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5349,
            "unit": "B/op",
            "extra": "58237 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "58237 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1811,
            "unit": "ns/op\t     132 B/op\t       5 allocs/op",
            "extra": "652192 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1811,
            "unit": "ns/op",
            "extra": "652192 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 132,
            "unit": "B/op",
            "extra": "652192 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "652192 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 22872,
            "unit": "ns/op\t    5767 B/op\t      83 allocs/op",
            "extra": "51781 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 22872,
            "unit": "ns/op",
            "extra": "51781 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5767,
            "unit": "B/op",
            "extra": "51781 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "51781 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1196225,
            "unit": "ns/op\t  473421 B/op\t    4512 allocs/op",
            "extra": "930 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1196225,
            "unit": "ns/op",
            "extra": "930 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 473421,
            "unit": "B/op",
            "extra": "930 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 4512,
            "unit": "allocs/op",
            "extra": "930 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 6057,
            "unit": "ns/op\t     188 B/op\t      10 allocs/op",
            "extra": "198367 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 6057,
            "unit": "ns/op",
            "extra": "198367 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 188,
            "unit": "B/op",
            "extra": "198367 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "198367 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 40309,
            "unit": "ns/op\t     195 B/op\t      10 allocs/op",
            "extra": "30030 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 40309,
            "unit": "ns/op",
            "extra": "30030 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 195,
            "unit": "B/op",
            "extra": "30030 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "30030 times\n4 procs"
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
          "id": "4e6b6185f8ce200d0da764c00565c633970f2a78",
          "message": "Merge pull request #141 from cordum-io/fix/orphan-nats-retry-storm\n\nfix: break orphan NATS retry storm for terminal/deleted runs",
          "timestamp": "2026-03-19T12:15:51+02:00",
          "tree_id": "b00ef695592c5fe28e487f8e972697463b4c4f58",
          "url": "https://github.com/cordum-io/cordum/commit/4e6b6185f8ce200d0da764c00565c633970f2a78"
        },
        "date": 1773915618154,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 16762,
            "unit": "ns/op\t    5337 B/op\t      76 allocs/op",
            "extra": "70741 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 16762,
            "unit": "ns/op",
            "extra": "70741 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5337,
            "unit": "B/op",
            "extra": "70741 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "70741 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1822,
            "unit": "ns/op\t     132 B/op\t       5 allocs/op",
            "extra": "650310 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1822,
            "unit": "ns/op",
            "extra": "650310 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 132,
            "unit": "B/op",
            "extra": "650310 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "650310 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 19446,
            "unit": "ns/op\t    5918 B/op\t      83 allocs/op",
            "extra": "59842 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 19446,
            "unit": "ns/op",
            "extra": "59842 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5918,
            "unit": "B/op",
            "extra": "59842 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "59842 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1141275,
            "unit": "ns/op\t  473498 B/op\t    4513 allocs/op",
            "extra": "1064 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1141275,
            "unit": "ns/op",
            "extra": "1064 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 473498,
            "unit": "B/op",
            "extra": "1064 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 4513,
            "unit": "allocs/op",
            "extra": "1064 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 5975,
            "unit": "ns/op\t     188 B/op\t      10 allocs/op",
            "extra": "200469 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 5975,
            "unit": "ns/op",
            "extra": "200469 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 188,
            "unit": "B/op",
            "extra": "200469 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "200469 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 40069,
            "unit": "ns/op\t     194 B/op\t      10 allocs/op",
            "extra": "28532 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 40069,
            "unit": "ns/op",
            "extra": "28532 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 194,
            "unit": "B/op",
            "extra": "28532 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "28532 times\n4 procs"
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
          "id": "8aa94ed86f11ffabe3f7f329a5377fa74c784e34",
          "message": "Merge pull request #142 from cordum-io/dependabot/go_modules/google.golang.org/grpc-1.79.3\n\nbuild(deps): bump google.golang.org/grpc from 1.78.0 to 1.79.3",
          "timestamp": "2026-03-19T12:15:54+02:00",
          "tree_id": "c7c409d62f266db068c9f0a0204538edec58622b",
          "url": "https://github.com/cordum-io/cordum/commit/8aa94ed86f11ffabe3f7f329a5377fa74c784e34"
        },
        "date": 1773915628219,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 17700,
            "unit": "ns/op\t    5355 B/op\t      76 allocs/op",
            "extra": "67072 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 17700,
            "unit": "ns/op",
            "extra": "67072 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5355,
            "unit": "B/op",
            "extra": "67072 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "67072 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1791,
            "unit": "ns/op\t     132 B/op\t       5 allocs/op",
            "extra": "638563 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1791,
            "unit": "ns/op",
            "extra": "638563 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 132,
            "unit": "B/op",
            "extra": "638563 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "638563 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 20605,
            "unit": "ns/op\t    5846 B/op\t      83 allocs/op",
            "extra": "57166 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 20605,
            "unit": "ns/op",
            "extra": "57166 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5846,
            "unit": "B/op",
            "extra": "57166 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "57166 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1157197,
            "unit": "ns/op\t  473446 B/op\t    4513 allocs/op",
            "extra": "1075 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1157197,
            "unit": "ns/op",
            "extra": "1075 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 473446,
            "unit": "B/op",
            "extra": "1075 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 4513,
            "unit": "allocs/op",
            "extra": "1075 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 6116,
            "unit": "ns/op\t     188 B/op\t      10 allocs/op",
            "extra": "195606 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 6116,
            "unit": "ns/op",
            "extra": "195606 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 188,
            "unit": "B/op",
            "extra": "195606 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "195606 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 40018,
            "unit": "ns/op\t     193 B/op\t      10 allocs/op",
            "extra": "29766 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 40018,
            "unit": "ns/op",
            "extra": "29766 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 193,
            "unit": "B/op",
            "extra": "29766 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "29766 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yaront1111@users.noreply.github.com",
            "name": "yaront1111",
            "username": "yaront1111"
          },
          "committer": {
            "email": "yaront1111@users.noreply.github.com",
            "name": "yaront1111",
            "username": "yaront1111"
          },
          "distinct": true,
          "id": "a8a7d40c65dc5968d7ef87b4b5fbe3377801b5e9",
          "message": "chore: bump cap to v2.8.1 (Redis TLS + direct worker dispatch)\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-23T17:30:44+02:00",
          "tree_id": "98492f5c97f5d1f6e192222578071e804b307149",
          "url": "https://github.com/cordum-io/cordum/commit/a8a7d40c65dc5968d7ef87b4b5fbe3377801b5e9"
        },
        "date": 1774280509508,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 18990,
            "unit": "ns/op\t    5370 B/op\t      76 allocs/op",
            "extra": "64792 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 18990,
            "unit": "ns/op",
            "extra": "64792 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5370,
            "unit": "B/op",
            "extra": "64792 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "64792 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1808,
            "unit": "ns/op\t     132 B/op\t       5 allocs/op",
            "extra": "653544 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1808,
            "unit": "ns/op",
            "extra": "653544 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 132,
            "unit": "B/op",
            "extra": "653544 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "653544 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 23370,
            "unit": "ns/op\t    5767 B/op\t      83 allocs/op",
            "extra": "51728 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 23370,
            "unit": "ns/op",
            "extra": "51728 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5767,
            "unit": "B/op",
            "extra": "51728 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "51728 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1141333,
            "unit": "ns/op\t  473381 B/op\t    4512 allocs/op",
            "extra": "1048 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1141333,
            "unit": "ns/op",
            "extra": "1048 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 473381,
            "unit": "B/op",
            "extra": "1048 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 4512,
            "unit": "allocs/op",
            "extra": "1048 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 6013,
            "unit": "ns/op\t     188 B/op\t      10 allocs/op",
            "extra": "200124 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 6013,
            "unit": "ns/op",
            "extra": "200124 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 188,
            "unit": "B/op",
            "extra": "200124 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "200124 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 40350,
            "unit": "ns/op\t     195 B/op\t      10 allocs/op",
            "extra": "29386 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 40350,
            "unit": "ns/op",
            "extra": "29386 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 195,
            "unit": "B/op",
            "extra": "29386 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "29386 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yaront1111@users.noreply.github.com",
            "name": "yaront1111",
            "username": "yaront1111"
          },
          "committer": {
            "email": "yaront1111@users.noreply.github.com",
            "name": "yaront1111",
            "username": "yaront1111"
          },
          "distinct": true,
          "id": "718597d5690135353a3e5569f7a8b0f4901731b8",
          "message": "fix: approval flow race condition in pending replayer and state transitions\n\n- Fix replayer re-submitting already-transitioned approved jobs by re-checking\n  current state before replay (prevents approval->safety->reapproval loop)\n- Allow Pending/Approval states to transition directly to Succeeded\n- Fix approval-granted check to match reason before gate type\n- Add test for skipping already-transitioned approved jobs\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-23T19:26:20+02:00",
          "tree_id": "7b5adacdfe5d5bf50d3a6b90ed7f5e9998d987b2",
          "url": "https://github.com/cordum-io/cordum/commit/718597d5690135353a3e5569f7a8b0f4901731b8"
        },
        "date": 1774287032977,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 20244,
            "unit": "ns/op\t    5386 B/op\t      76 allocs/op",
            "extra": "61254 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 20244,
            "unit": "ns/op",
            "extra": "61254 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5386,
            "unit": "B/op",
            "extra": "61254 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "61254 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1904,
            "unit": "ns/op\t     132 B/op\t       5 allocs/op",
            "extra": "624829 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1904,
            "unit": "ns/op",
            "extra": "624829 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 132,
            "unit": "B/op",
            "extra": "624829 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "624829 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 25333,
            "unit": "ns/op\t    5803 B/op\t      83 allocs/op",
            "extra": "45627 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 25333,
            "unit": "ns/op",
            "extra": "45627 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5803,
            "unit": "B/op",
            "extra": "45627 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "45627 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1176082,
            "unit": "ns/op\t  473487 B/op\t    4513 allocs/op",
            "extra": "1026 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1176082,
            "unit": "ns/op",
            "extra": "1026 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 473487,
            "unit": "B/op",
            "extra": "1026 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 4513,
            "unit": "allocs/op",
            "extra": "1026 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 6166,
            "unit": "ns/op\t     188 B/op\t      10 allocs/op",
            "extra": "194631 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 6166,
            "unit": "ns/op",
            "extra": "194631 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 188,
            "unit": "B/op",
            "extra": "194631 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "194631 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 41368,
            "unit": "ns/op\t     196 B/op\t      10 allocs/op",
            "extra": "29193 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 41368,
            "unit": "ns/op",
            "extra": "29193 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 196,
            "unit": "B/op",
            "extra": "29193 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "29193 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yaront1111@users.noreply.github.com",
            "name": "yaront1111",
            "username": "yaront1111"
          },
          "committer": {
            "email": "yaront1111@users.noreply.github.com",
            "name": "yaront1111",
            "username": "yaront1111"
          },
          "distinct": false,
          "id": "af0114fa1d645e3ae4f3ccd73bb2fb7160340dd5",
          "message": "fix: approval 409 conflict — add distributed lock, idempotency, and TOCTOU defense\n\nRoot cause: approval handler performed non-atomic check-then-act without\na distributed lock, allowing race conditions between concurrent approve\nrequests, approve+reject, and the pending replayer.\n\nFixes:\n- Wrap approve/reject handlers in per-job distributed lock (same key\n  prefix as scheduler: cordum:scheduler:job:) to prevent concurrent\n  approve+approve and approve+reject races\n- Make approval idempotent: if job already approved (PENDING/SUCCEEDED\n  with approval_granted label), return 200 with existing record instead\n  of 409\n- Make rejection idempotent: if job already DENIED, return 200\n- Add TOCTOU defense: re-check workflow run terminal status under lock\n  right before state transition to prevent approving dead workflows\n- Use stable idempotency key (\"approval:\" + jobID) instead of random\n  UUID so NATS dedup works on retries\n- Add audit logging on all 409 failure paths (approve_failed action)\n- Add structured slog.Info at approval success, idempotent hit, and\n  rejection success for production observability\n- Extract handlerResult type to eliminate 30 anonymous struct literals\n- Remove same-state transition shortcut (from==to) in isAllowedTransition\n  to prevent double-approval bugs; add explicit SCHEDULED self-transition\n  for dispatch rollback",
          "timestamp": "2026-03-23T22:38:14+02:00",
          "tree_id": "9dd01f7992cb35d2f99dabf299127b31ef6b2713",
          "url": "https://github.com/cordum-io/cordum/commit/af0114fa1d645e3ae4f3ccd73bb2fb7160340dd5"
        },
        "date": 1774298842132,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 18245,
            "unit": "ns/op\t    5372 B/op\t      76 allocs/op",
            "extra": "64118 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 18245,
            "unit": "ns/op",
            "extra": "64118 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5372,
            "unit": "B/op",
            "extra": "64118 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "64118 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1789,
            "unit": "ns/op\t     132 B/op\t       5 allocs/op",
            "extra": "636650 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1789,
            "unit": "ns/op",
            "extra": "636650 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 132,
            "unit": "B/op",
            "extra": "636650 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "636650 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 22839,
            "unit": "ns/op\t    5764 B/op\t      83 allocs/op",
            "extra": "52161 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 22839,
            "unit": "ns/op",
            "extra": "52161 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5764,
            "unit": "B/op",
            "extra": "52161 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "52161 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1223753,
            "unit": "ns/op\t  473378 B/op\t    4512 allocs/op",
            "extra": "889 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1223753,
            "unit": "ns/op",
            "extra": "889 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 473378,
            "unit": "B/op",
            "extra": "889 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 4512,
            "unit": "allocs/op",
            "extra": "889 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 6066,
            "unit": "ns/op\t     188 B/op\t      10 allocs/op",
            "extra": "198555 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 6066,
            "unit": "ns/op",
            "extra": "198555 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 188,
            "unit": "B/op",
            "extra": "198555 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "198555 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 40014,
            "unit": "ns/op\t     194 B/op\t      10 allocs/op",
            "extra": "30116 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 40014,
            "unit": "ns/op",
            "extra": "30116 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 194,
            "unit": "B/op",
            "extra": "30116 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "30116 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yaront1111@users.noreply.github.com",
            "name": "yaront1111",
            "username": "yaront1111"
          },
          "committer": {
            "email": "yaront1111@users.noreply.github.com",
            "name": "yaront1111",
            "username": "yaront1111"
          },
          "distinct": true,
          "id": "8166179ede24cf819785a13b369a39b90ea1e84e",
          "message": "fix: CI test failures — OIDC nil httpClient + MCP channel race\n\n- oidc_refresh_test.go: use time.Hour cooldown to guarantee all\n  goroutines are rate-limited without needing a real httpClient\n  (prevents SIGSEGV on nil httpClient.Do)\n- transport_http.go: hold RLock for entire lookup+send in\n  writeSessionEvent to prevent removeSession from closing the\n  channel between lookup and send (fixes data race detected by -race)",
          "timestamp": "2026-03-24T15:18:25+02:00",
          "tree_id": "813f4a466db7808dc4a3fe9776b5b5467383845b",
          "url": "https://github.com/cordum-io/cordum/commit/8166179ede24cf819785a13b369a39b90ea1e84e"
        },
        "date": 1774358556042,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 18424,
            "unit": "ns/op\t    5377 B/op\t      76 allocs/op",
            "extra": "63214 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 18424,
            "unit": "ns/op",
            "extra": "63214 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5377,
            "unit": "B/op",
            "extra": "63214 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "63214 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1799,
            "unit": "ns/op\t     132 B/op\t       5 allocs/op",
            "extra": "667786 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1799,
            "unit": "ns/op",
            "extra": "667786 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 132,
            "unit": "B/op",
            "extra": "667786 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "667786 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 23482,
            "unit": "ns/op\t    5770 B/op\t      83 allocs/op",
            "extra": "51520 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 23482,
            "unit": "ns/op",
            "extra": "51520 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5770,
            "unit": "B/op",
            "extra": "51520 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "51520 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1268945,
            "unit": "ns/op\t  473455 B/op\t    4513 allocs/op",
            "extra": "1036 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1268945,
            "unit": "ns/op",
            "extra": "1036 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 473455,
            "unit": "B/op",
            "extra": "1036 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 4513,
            "unit": "allocs/op",
            "extra": "1036 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 6129,
            "unit": "ns/op\t     188 B/op\t      10 allocs/op",
            "extra": "193872 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 6129,
            "unit": "ns/op",
            "extra": "193872 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 188,
            "unit": "B/op",
            "extra": "193872 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "193872 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 40346,
            "unit": "ns/op\t     194 B/op\t      10 allocs/op",
            "extra": "29526 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 40346,
            "unit": "ns/op",
            "extra": "29526 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 194,
            "unit": "B/op",
            "extra": "29526 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "29526 times\n4 procs"
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
          "id": "d0060a3915c970d9af88317ea0d896277e188b6c",
          "message": "Merge pull request #146 from cordum-io/dependabot/go_modules/sdk/google.golang.org/grpc-1.79.3\n\nbuild(deps): bump google.golang.org/grpc from 1.78.0 to 1.79.3 in /sdk",
          "timestamp": "2026-03-24T15:54:18+02:00",
          "tree_id": "bcb30e8dd1c747709618adea2ea23cf79e2aa802",
          "url": "https://github.com/cordum-io/cordum/commit/d0060a3915c970d9af88317ea0d896277e188b6c"
        },
        "date": 1774360707293,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 18016,
            "unit": "ns/op\t    5363 B/op\t      76 allocs/op",
            "extra": "65658 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 18016,
            "unit": "ns/op",
            "extra": "65658 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5363,
            "unit": "B/op",
            "extra": "65658 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "65658 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1792,
            "unit": "ns/op\t     132 B/op\t       5 allocs/op",
            "extra": "645168 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1792,
            "unit": "ns/op",
            "extra": "645168 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 132,
            "unit": "B/op",
            "extra": "645168 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "645168 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 21211,
            "unit": "ns/op\t    5819 B/op\t      83 allocs/op",
            "extra": "56547 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 21211,
            "unit": "ns/op",
            "extra": "56547 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5819,
            "unit": "B/op",
            "extra": "56547 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "56547 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1282635,
            "unit": "ns/op\t  473381 B/op\t    4512 allocs/op",
            "extra": "1016 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1282635,
            "unit": "ns/op",
            "extra": "1016 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 473381,
            "unit": "B/op",
            "extra": "1016 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 4512,
            "unit": "allocs/op",
            "extra": "1016 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 6144,
            "unit": "ns/op\t     188 B/op\t      10 allocs/op",
            "extra": "196498 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 6144,
            "unit": "ns/op",
            "extra": "196498 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 188,
            "unit": "B/op",
            "extra": "196498 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "196498 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 40074,
            "unit": "ns/op\t     195 B/op\t      10 allocs/op",
            "extra": "29540 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 40074,
            "unit": "ns/op",
            "extra": "29540 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 195,
            "unit": "B/op",
            "extra": "29540 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "29540 times\n4 procs"
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
          "id": "b23f64ae0e3c0677b4cb460cdda6638d3e398f4c",
          "message": "Merge pull request #152 from cordum-io/feat/policy-overview-page\n\nfeat: safety kernel velocity limiting, denied status pipeline, policy overview, legacy cleanup",
          "timestamp": "2026-03-29T02:20:43+03:00",
          "tree_id": "8286da94fd942e6811c93d9e2545298d35bb0db1",
          "url": "https://github.com/cordum-io/cordum/commit/b23f64ae0e3c0677b4cb460cdda6638d3e398f4c"
        },
        "date": 1774740397251,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 17347,
            "unit": "ns/op\t    5346 B/op\t      76 allocs/op",
            "extra": "68872 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 17347,
            "unit": "ns/op",
            "extra": "68872 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5346,
            "unit": "B/op",
            "extra": "68872 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "68872 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1850,
            "unit": "ns/op\t     132 B/op\t       5 allocs/op",
            "extra": "631798 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1850,
            "unit": "ns/op",
            "extra": "631798 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 132,
            "unit": "B/op",
            "extra": "631798 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "631798 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 21555,
            "unit": "ns/op\t    5767 B/op\t      83 allocs/op",
            "extra": "51754 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 21555,
            "unit": "ns/op",
            "extra": "51754 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5767,
            "unit": "B/op",
            "extra": "51754 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "51754 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1119583,
            "unit": "ns/op\t  473548 B/op\t    4513 allocs/op",
            "extra": "1046 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1119583,
            "unit": "ns/op",
            "extra": "1046 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 473548,
            "unit": "B/op",
            "extra": "1046 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 4513,
            "unit": "allocs/op",
            "extra": "1046 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 6109,
            "unit": "ns/op\t     188 B/op\t      10 allocs/op",
            "extra": "195691 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 6109,
            "unit": "ns/op",
            "extra": "195691 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 188,
            "unit": "B/op",
            "extra": "195691 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "195691 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 39774,
            "unit": "ns/op\t     195 B/op\t      10 allocs/op",
            "extra": "29862 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 39774,
            "unit": "ns/op",
            "extra": "29862 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 195,
            "unit": "B/op",
            "extra": "29862 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "29862 times\n4 procs"
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
          "id": "18c2363a30c276190bc9002df153575046a62814",
          "message": "Merge pull request #153 from cordum-io/feat/dependency-upgrades\n\nfeat: upgrade dashboard deps — lucide-react 1.7, dagre 3.0, vite-plugin 6.0",
          "timestamp": "2026-03-29T02:36:50+03:00",
          "tree_id": "8a4fd36f9353b07fdd2526c8b8652fb46f58eece",
          "url": "https://github.com/cordum-io/cordum/commit/18c2363a30c276190bc9002df153575046a62814"
        },
        "date": 1774741375392,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 19033,
            "unit": "ns/op\t    5232 B/op\t      76 allocs/op",
            "extra": "54810 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 19033,
            "unit": "ns/op",
            "extra": "54810 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5232,
            "unit": "B/op",
            "extra": "54810 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "54810 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1858,
            "unit": "ns/op\t     132 B/op\t       5 allocs/op",
            "extra": "626412 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1858,
            "unit": "ns/op",
            "extra": "626412 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 132,
            "unit": "B/op",
            "extra": "626412 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "626412 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 21440,
            "unit": "ns/op\t    5821 B/op\t      83 allocs/op",
            "extra": "56476 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 21440,
            "unit": "ns/op",
            "extra": "56476 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5821,
            "unit": "B/op",
            "extra": "56476 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "56476 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1099681,
            "unit": "ns/op\t  473213 B/op\t    4511 allocs/op",
            "extra": "1065 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1099681,
            "unit": "ns/op",
            "extra": "1065 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 473213,
            "unit": "B/op",
            "extra": "1065 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 4511,
            "unit": "allocs/op",
            "extra": "1065 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 6258,
            "unit": "ns/op\t     188 B/op\t      10 allocs/op",
            "extra": "189866 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 6258,
            "unit": "ns/op",
            "extra": "189866 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 188,
            "unit": "B/op",
            "extra": "189866 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "189866 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 41326,
            "unit": "ns/op\t     195 B/op\t      10 allocs/op",
            "extra": "29295 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 41326,
            "unit": "ns/op",
            "extra": "29295 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 195,
            "unit": "B/op",
            "extra": "29295 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "29295 times\n4 procs"
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
          "id": "2f3e1af815519e402514063db732ea38e6fadfd8",
          "message": "fix: upgrade vite 7→8 to resolve @vitejs/plugin-react 6.0 peer dep conflict (#155)\n\nThe squash merge of PR 153 brought @vitejs/plugin-react 6.0.1 which\nrequires vite 8. Upgrading vite from 7.3.1 to 8.0.3 resolves the\nERESOLVE conflict and fixes Docker npm ci.\n\nnpm ci now works cleanly without --legacy-peer-deps.\nAll 1076 tests pass, TypeScript clean.\n\nCo-authored-by: yaront1111 <yaront1111@users.noreply.github.com>",
          "timestamp": "2026-03-29T00:03:31Z",
          "tree_id": "a1c7748a564818d24060f279a92f546adbfba87d",
          "url": "https://github.com/cordum-io/cordum/commit/2f3e1af815519e402514063db732ea38e6fadfd8"
        },
        "date": 1774742936282,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 17658,
            "unit": "ns/op\t    5353 B/op\t      76 allocs/op",
            "extra": "67413 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 17658,
            "unit": "ns/op",
            "extra": "67413 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5353,
            "unit": "B/op",
            "extra": "67413 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacket (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "67413 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1906,
            "unit": "ns/op\t     132 B/op\t       5 allocs/op",
            "extra": "634290 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1906,
            "unit": "ns/op",
            "extra": "634290 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 132,
            "unit": "B/op",
            "extra": "634290 times\n4 procs"
          },
          {
            "name": "BenchmarkHandleHeartbeat (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "634290 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 20854,
            "unit": "ns/op\t    5830 B/op\t      83 allocs/op",
            "extra": "56792 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 20854,
            "unit": "ns/op",
            "extra": "56792 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 5830,
            "unit": "B/op",
            "extra": "56792 times\n4 procs"
          },
          {
            "name": "BenchmarkHandlePacketWithLeastLoaded (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "56792 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 1075854,
            "unit": "ns/op\t  473183 B/op\t    4511 allocs/op",
            "extra": "1089 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 1075854,
            "unit": "ns/op",
            "extra": "1089 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 473183,
            "unit": "B/op",
            "extra": "1089 times\n4 procs"
          },
          {
            "name": "BenchmarkReconcilerTick (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 4511,
            "unit": "allocs/op",
            "extra": "1089 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 6243,
            "unit": "ns/op\t     188 B/op\t      10 allocs/op",
            "extra": "190472 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 6243,
            "unit": "ns/op",
            "extra": "190472 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 188,
            "unit": "B/op",
            "extra": "190472 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection100 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "190472 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler)",
            "value": 41479,
            "unit": "ns/op\t     194 B/op\t      10 allocs/op",
            "extra": "29164 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - ns/op",
            "value": 41479,
            "unit": "ns/op",
            "extra": "29164 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - B/op",
            "value": 194,
            "unit": "B/op",
            "extra": "29164 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerSelection1000 (github.com/cordum/cordum/core/controlplane/scheduler) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "29164 times\n4 procs"
          }
        ]
      }
    ]
  }
}