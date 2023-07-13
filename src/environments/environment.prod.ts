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
  production: true,
  lensConfig: new LensConfig(
    [
      new Beam(
        'broker.ccp-it.dktk.dkfz.de',
        new URL('https://backend.data.dktk.dkfz.de/prod/'),
        [
          'mannheim',
          'freiburg',
          'muenchen-tum',
          'hamburg',
          'berlin',
          'mainz',
          'dresden',
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
