import {
  LensConfig,
  diagnosisMeasure,
  medicationStatementsMeasure,
  patientsMeasure,
  proceduresMeasure,
  specimenMeasure,
} from '@samply/lens-core';
import { Beam } from '@samply/lens-core/cql';

export const environment = {
  production: true,
  lensConfig: new LensConfig(
    [
      new Beam(
        'broker.ccp-it.dktk.dkfz.de',
        new URL('https://backend.data.dktk.dkfz.de/prod/'),
        ['mannheim', 'freiburg', 'muenchen-tum']
      ),
    ],
    [
      patientsMeasure,
      diagnosisMeasure,
      specimenMeasure,
      proceduresMeasure,
      medicationStatementsMeasure,
    ]
  ),
};
