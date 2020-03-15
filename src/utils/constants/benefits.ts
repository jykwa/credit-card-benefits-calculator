interface IBenefits {
  [key: string]: {
    [key: string]: string;
  };
}

export const BENEFITS: IBenefits = {
  travelSpend: {
    question: 'Yearly Travel Rewards'
  },
  diningSpend: {
    question: 'Yearly Dining Rewards'
  },
  nonBonusSpend: {
    question: 'Yearly non-bonus Rewards'
  },
  loungeSpend: {
    question: 'Priority Pass Value'
  },
  globalEntryTSA: {
    question: 'Global Entry/TSA PreCheck Value'
  },
  doordashSpend: {
    question: 'DoorDash Value'
  },
  signupBonus: {
    question: 'Signup Bonus Value'
  },
  travelCredit: {
    question: 'Yearly Travel Credit $300 (CSR only, does not earn points)'
  },
  annualFee: {
    question: 'Annual Fee'
  }
};
