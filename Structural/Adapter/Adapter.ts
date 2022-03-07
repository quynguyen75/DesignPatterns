class VietnameseMoney {
  pay(vnd: number): number {
    console.log(`Pay ${vnd} VND`);
    return vnd;
  }
}

class AmericanMoney {
  pay(usd: number): number {
    console.log(`Pay ${usd} USD`);
    return usd;
  }
}

class ConverterAdapter extends VietnameseMoney {
  private americanMoney: AmericanMoney;

  constructor(americanMoney: AmericanMoney) {
    super();
    this.americanMoney = americanMoney;
  }

  private convertUSDtoVND(usd: number): number {
    console.log("Convert usd to vnd");
    return usd * 22840;
  }

  pay(usd: number): number {
    const vnd = this.convertUSDtoVND(this.americanMoney.pay(usd));
    return super.pay(vnd);
  }
}

const americanMoney = new AmericanMoney();

const converterAdapter = new ConverterAdapter(americanMoney);

converterAdapter.pay(1);

/**
 * Pay 1 USD
 * Convert usd to vnd
 * Pay 22840 VND
 */
