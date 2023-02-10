import { render } from '@testing-library/react';

import UiStandard from './ui-standard';

describe('UiStandard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiStandard />);
    expect(baseElement).toBeTruthy();
  });
});
