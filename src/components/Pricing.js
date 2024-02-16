import React from 'react';
import { NavBarHeader2 } from '../ui-components';
import { HeroLayout2 } from '../ui-components';
import { MarketingPricing } from '../ui-components';
import { MarketingFooterBrand } from '../ui-components';

function Pricing() {
  return (
    <div>
      <NavBarHeader2 />
      <MarketingPricing />
      <MarketingFooterBrand />
    </div>
  );
}

export default Pricing;