// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { LensConfig } from '@samply/lens-core';
import { Beam } from '@samply/lens-core/cql';
import {
  dktkDiagnosisMeasure,
  dktkMedicationStatementsMeasure,
  dktkPatientsMeasure,
  dktkProceduresMeasure,
  dktkSpecimenMeasure,
} from './measures';

export const environment = {
  production: false,
  lensConfig: new LensConfig(
    [
      new Beam(
        'dev.broker.ccp-it.dktk.dkfz.de',
        new URL('https://backend.demo.lens.samply.de/test/'),
        ['bonn', 'hannover']
      ),
      // NOTE: This is a temporary workaround while switching the sites to the production system
      new Beam(
        'broker.ccp-it.dktk.dkfz.de',
        new URL('https://backend.demo.lens.samply.de/prod/'),
        [
          'mannheim',
          'freiburg',
          'muenchen-tum',
          'hamburg',
          'frankfurt',
          'berlin',
          'dresden',
          'mainz',
          'muenchen-lmu',
          'essen',
          'ulm',
          'wuerzburg',
        ]
      ),
    ],
    [
      dktkPatientsMeasure,
      dktkDiagnosisMeasure,
      dktkSpecimenMeasure,
      dktkProceduresMeasure,
      dktkMedicationStatementsMeasure,
    ]
  ),
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
