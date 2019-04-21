import { TestBed } from '@angular/core/testing';

import { DocumentsResolver } from './documents.resolve';
import { StudentDataService } from '../student-data.service';
import { of } from 'rxjs/internal/observable/of';
import { RouterTestingModule } from '@angular/router/testing';


const docOptions = [
  {
    id: 1,
    name: "Domicile",
    category: "both"
  },
  {
    id: 2,
    name: "Marksheets",
    category: "both"
  },
  {
    id: 3,
    name: "Birth Certificate",
    category: "both"
  },
  {
    id: 6,
    name: "Police Clearance",
    category: "International"
  },
  {
    id: 6,
    name: "Passport",
    category: "International"
  },
  {
    id: 6,
    name: "Declaration",
    category: "both"
  }
]

const studentServiceStub = {
  getAllDocuments: jasmine.createSpy('getAllDocuments').and.returnValue(of(docOptions)),
}

describe('DocumentsResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [
      DocumentsResolver,
      { provide: StudentDataService, useValue: studentServiceStub }
    ]
  }));

  it('should be created', () => {
    const service: DocumentsResolver = TestBed.get(DocumentsResolver);
    expect(service).toBeTruthy();
  });
});
