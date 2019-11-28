// 共161个
const LicenseList = [
  'ZPL-2.1',
  'ZPL-2.0',
  'Zlib',
  'Zimbra-1.3',
  'Zend-2.0',
  'YPL-1.1',
  'Xnet',
  'xinetd',
  'XFree86-1.1',
  'X11',
  'WTFPL',
  'Watcom-1.0',
  'W3C',
  'VSL-1.0',
  'Vim',
  'UPL-1.0',
  'Unlicense',
  'UCL-1.0',
  'SPL-1.0',
  'SMLNJ',
  'Sleepycat',
  'SISSL',
  'SimPL-2.0',
  'SGI-B-2.0',
  'Ruby',
  'RSCPL',
  'RPSL-1.0',
  'RPL-1.5',
  'RPL-1.1',
  'QPL-1.0',
  'Python-2.0',
  'PostgreSQL',
  'PHP-3.01',
  'PHP-3.0',
  'OSL-3.0',
  'OSL-2.1',
  'OSL-2.0',
  'OSL-1.1',
  'OSL-1.0',
  'OSET-PL-2.1',
  'OpenSSL',
  'OLDAP-2.7',
  'OLDAP-2.3',
  'OGTSL',
  'OFL-1.1',
  'OFL-1.0',
  'ODbL-1.0',
  'OCLC-2.0',
  'NTP',
  'NPOSL-3.0',
  'NPL-1.1',
  'NPL-1.0',
  'NOSL',
  'Nokia',
  'NGPL',
  'NCSA',
  'Naumen',
  'NASA-1.3',
  'Multics',
  'MS-RL',
  'MS-PL',
  'MPL-2.0-no-copyleft-exception',
  'MPL-2.0',
  'MPL-1.1',
  'MPL-1.0',
  'Motosoto',
  'MIT-0',
  'MIT',
  'MirOS',
  'LPPL-1.3c',
  'LPPL-1.3a',
  'LPPL-1.2',
  'LPL-1.02',
  'LPL-1.0',
  'LiLiQ-Rplus-1.1',
  'LiLiQ-R-1.1',
  'LiLiQ-P-1.1',
  'LGPL-3.0-or-later',
  'LGPL-3.0-only',
  'LGPL-2.1-or-later',
  'LGPL-2.1-only',
  'LGPL-2.0-or-later',
  'LGPL-2.0-only',
  'ISC',
  'IPL-1.0',
  'IPA',
  'Intel',
  'Imlib2',
  'iMatix',
  'IJG',
  'HPND',
  'GPL-3.0-or-later',
  'GPL-3.0-only',
  'GPL-2.0-or-later',
  'GPL-2.0-only',
  'gnuplot',
  'GFDL-1.3-or-later',
  'GFDL-1.3-only',
  'GFDL-1.2-or-later',
  'GFDL-1.2-only',
  'GFDL-1.1-or-later',
  'GFDL-1.1-only',
  'FTL',
  'FSFAP',
  'Frameworx-1.0',
  'Fair',
  'EUPL-1.2',
  'EUPL-1.1',
  'EUDatagrid',
  'EPL-2.0',
  'EPL-1.0',
  'Entessa',
  'EFL-2.0',
  'EFL-1.0',
  'ECL-2.0',
  'ECL-1.0',
  'CUA-OPL-1.0',
  'CPL-1.0',
  'CPAL-1.0',
  'Condor-1.1',
  'CNRI-Python',
  'ClArtistic',
  'CECILL-C',
  'CECILL-B',
  'CECILL-2.1',
  'CECILL-2.0',
  'CDDL-1.0',
  'CC0-1.0',
  'CC-BY-SA-4.0',
  'CC-BY-4.0',
  'CATOSL-1.1',
  'BSL-1.0',
  'BSD-4-Clause',
  'BSD-3-Clause-LBNL',
  'BSD-3-Clause-Clear',
  'BSD-3-Clause',
  'BSD-2-Clause-Patent',
  'BSD-2-Clause-FreeBSD',
  'BSD-2-Clause',
  'BitTorrent-1.1',
  'Artistic-2.0',
  'Artistic-1.0-Perl',
  'Artistic-1.0-cl8',
  'Artistic-1.0',
  'APSL-2.0',
  'APSL-1.2',
  'APSL-1.1',
  'APSL-1.0',
  'APL-1.0',
  'Apache-2.0',
  'Apache-1.1',
  'Apache-1.0',
  'AGPL-3.0-or-later',
  'AGPL-3.0-only',
  'AFL-3.0',
  'AFL-2.1',
  'AFL-2.0',
  'AFL-1.2',
  'AFL-1.1',
  'AAL',
  '0BSD'
];

const Koa = require('koa');
const app = new Koa();
const request = require('request');

let repoUrlList = [];
getRepoList(getRepoDetail);

function getRepoList(callback){
  // https://api.github.com/search/repositories
  // var LicenseList = ['MIT', 'Apache-2.0', 'GPL-2.0-only'];
  var LicenseListed = 0;
  let repoList = [];
  for (let i=0; i<LicenseList.length; i++) {
    request.get({
      url: 'https://api.github.com/search/repositories',
      headers: {
        'User-Agent': 'request'
      },
      qs: {
        q: 'LICENSE:' + LicenseList[i]
      }
    }, function (error, response, body) {
      // console.log('error:', error); // Print the error if one occurred
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      try {
        const repoListWithOneLicense = JSON.parse(body);
        // console.log('oriRepoData:', oriRepoData); // Print the HTML for the Google homepage.
        repoList.push({
          'LicenseName': LicenseList[i],
          'data': repoListWithOneLicense
        });
      } catch {
        // console.log('oriRepoData:', oriRepoData); // Print the HTML for the Google homepage.
        repoList.push({
          'LicenseName': LicenseList[i],
          'data': {
            total_count: 0,
            incomplete_results: false,
            items: [
              {
                html_url: 'No data',
              }
            ]
          }
        });
      }
      LicenseListed++;
      if (i === LicenseList.length - 1 && LicenseListed === LicenseList.length) {
        callback(repoList);
      }
    });
  }
}

function getRepoDetail(data) {
  let repoUrlList = [];
  for (var j=0; j<data.length; j++) {
    // console.log(data[j].data.items);
    repoUrlList.push(
      {
        'LicenseName': data[j].LicenseName,
        'LicenseRepoUrl': getRepoURLWithLicense(data[j].data.items)
      }
    );
  }
  function getRepoURLWithLicense(data) {
    var repoUrlListWithOneLicense = [];
    for (var i=0; i<data.length; i++) {
      console.log(data[i].html_url);
      repoUrlListWithOneLicense.push(data[i].html_url);
    }
    return repoUrlListWithOneLicense;
  }
  // console.log('====================爬取完成====================');
  // console.log(repoUrlList);
  return repoUrlList;
}
