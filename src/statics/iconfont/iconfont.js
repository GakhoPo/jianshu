import { createGlobalStyle } from 'styled-components';

const GlobalStyleIcon = createGlobalStyle `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1611115878231'); /* IE9 */
  src: url('./iconfont.eot?t=1611115878231#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAa4AAsAAAAADGQAAAZoAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCEHgqKKIhTATYCJAMsCxgABCAFhG0HgRQbrwrIDiUhQcFgYDBQTjx8rYW9P92DuwEESQ6IHKFwSflEEakIR8KAUUhH+vT8wDb7B+hCXTaLiItoYlEGOEwGeNXhVRTg/ej0h/sZb62zYT6bDWWCVe+vqi/tPo2PEuiAItoiQRID7ADp2E8BdrZknGcT6MxUBNk0cDgBQTLdEGi5wlmNEJSwyxWc0Jiqgj1zFbdAqyluoE8A3PR+Pv6DigiiUCb6lvvODbBA7z/wuYzN9M/U7Dhh2XBesPuRsBzIxINC/y3AgvxymE6u1jgDjDZ+K8Yf7HPt54bPYz8f+vnKz2V/zx/ITIR0GC02D1rlNr2Fiv2H10lqoqIbh2BcL3T8AUtMyx9ETMkf1CCLGKwyUAuDKjTAqgLGwqoBDoVyaFwJqwSU0acGA2ePicBcENcAitV0YpNXHQqNmgxk6TJfevJ0BBkOJzeaXKecU8rNmDEGw+gUngNnNkETBkljptyRcc0uZUAI3Dva7bpvnP6+L1O7Wx044Y7c/Zq7pSwTu5R8RcletyTugI8+XHKLqkoh1lDlM9L3Ba1+TsmfdsrdD8pEia/X4dNpTaB/lla9MU8PXQytwcGTgtpDxXrkePwWRhwBQ5zUweB4kUqV3lWs5vpWkjTVUDRJkA1NtKUpUKA7hCSyJhBXFZh6JYQgEZ+PnqVSFGpmKmPoa6pgBTu8ikKGXlVtXpLcl1NZWW5bH92heu06/ZI4eoP5Eha6xxTDmSvJAduuVoecv54WuP1as0E74pgO6XSHye3fmNftLLoyevTas/Q6mVi7sfqA4lxPJuQ38WsfhOmOGAidXd/QuD5VtzW+3nhZvwSgU+dr3eJnyCyanuUdpTt55iDMPKRfchtBrrLHfcgsVWcvltkzlRvRL/F1Y9bF9doQyx6UF6uv1Fm+174lyktlphw8h/+J7IcUh73kTyXe6LSfo6TOeXM+SngiiiNw9Y/gyiezjKMLC02jO63IormoOaGQXDHK8tXpxC8z3hR8eTqs2FFIBiOn85e0IqCfQfMex98idRpmSPNWdKMx6QZ2j4dLJrSxd7Vy70V1ea6hg8Z8cvSHmM4pxWP3U4XTxH/yljcFDhqqviA+Qc6cQu/U9NV8HW9I+1H28crc+VwZH9d+2ZkBnjdDYPuyucl/I4UnBiCz7421jZze56vul8c9Wvz2kuONwqfXLpUxfE/jmF+7ekcXtabXtOQ0Fqrwz5WGhvdKxT7ogjNnFqC9Z+hf6n1V8++/+WpTv13/zFam+ht1gv+LjdijR9hGQ+bI7XFRxd4F6NmzKHQLKDm01BFqYdyBDzbD2g+yBgegsz+uj4igz1FdV07NPgjFB0lvb3+C1Pf2/ois/72UN5+cqVLqTO8hGLBrztxrv301OuvOYMtF4phQXjd8xZJkXBNfjUc7Wi0vmsbHS7lnS/tn58MNdtDLvP4vmVC/aaNq6zmKRPuauJ4+zT89ReluXSmiXV/izqe4kBb9sN5dP22lpccJMf8kZv+UnQp13wow9G1aU2WPIjtJ2osmmzJXRuFk4Qg9KpvSpqHYwXGXq6vGJftHz2mkuP700Y0T5NcB9m8A9GL6CeMBSC/RzwBIT9H3AUgX0C8Bem8qTBRAL6XL2EyA3p9uYED/HbYGC/+5reVe8Ndv2sK6/x+k/wfO+FT8jPVivZihW1Kj+LygH1ci9wT/KBK6coiJFtma5HgoOwoHtgnKFuiMIX5Y4bHeH56Y0Njod0xMiKBQmwFJYz4lM5ZDaWAFVBprobPMoP0HxhFgIrdYah4BYbTjUBjpFSSjPaVkxntQmug7qIwODDpHIuqIAwuD0/UTGKPEWHDTJJwzu12s6ZJ0futYxupxGIW4xuNRjCByKby8pCxdGsS4GGGIbcTx1gpJYnFWcDvxgcT5GIfDjfOC28aYpZIOSeK7lpayRfdUYnY7QWcjAcNIwrDAmUyC45i5ubDO9BJd5vvHYlh5OBgJFZPKkhSGQMQtHleuRFkDyiCjq9GkS+kWjWdVQSK9LNwaKXBzwg0kvQyHkXfD8cWr2TDMJCU6OmR5XZWSZGxTY8n0hPN+L4COfuVBFJEiRxlV1NFEG10MYmhwxsN1eIx2s9tlxSZyLq3YEVgDJydlWJrTiDzn0k3u4FxGl7Mt44rizG3iJFFinG0e3nJl27bxEwMneZxGt4lD+xj1bLeIxWjjSF8lAAAAAA==') format('woff2'),
  url('./iconfont.woff?t=1611115878231') format('woff'),
  url('./iconfont.ttf?t=1611115878231') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1611115878231#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export {GlobalStyleIcon};