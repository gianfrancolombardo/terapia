// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase_config: {
    apiKey: 'AIzaSyDhqstw_PAigC29YdhyQA55NsFCOxHp64w',
    authDomain: 'terapia-12c4b.firebaseapp.com',
    databaseURL: 'https://terapia-12c4b.firebaseio.com',
    projectId: 'terapia-12c4b',
    storageBucket: 'terapia-12c4b.appspot.com',
    messagingSenderId: '551689411523',
    appId: '1:551689411523:web:02abeea204782a485d3b76',
    measurementId: 'G-XK47D8XNL7'
  },
  functions: {
    notify: 'http://localhost:5001/terapia-12c4b/us-central1/new_notify'
  },
  hotjar: {
    id: '2055325'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
