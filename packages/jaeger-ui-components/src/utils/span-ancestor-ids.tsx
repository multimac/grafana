// Copyright (c) 2019 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { find as _find, get as _get } from 'lodash';

import { TNil } from '../types';
import { TraceSpan } from '../types/trace';

export default function spanAncestorIds(span: TraceSpan | TNil): string[] {
  const ancestorIDs: string[] = [];
  if (!span) {
    return ancestorIDs;
  }
  let ref = span.parentSpan?.span;
  while (ref) {
    ancestorIDs.push(ref.spanID);
    ref = ref.parentSpan?.span;
  }
  return ancestorIDs;
}
