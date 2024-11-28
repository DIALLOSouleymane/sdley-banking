import { formatAmount } from '@/lib/utils'
import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

const TotalBalancebox = ({
    accounts = [], totalBanks, totalCurrentBalance
}:TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
        <div className="total-balance-chart">
            <DoughnutChart accounts={accounts} />
        </div>

        <div className="flex flex-col gap-6">
            <h2 className="header-2">
                Bank Accounts: {totalBanks}
            </h2>
            <div className="flex flex-col gap-2">
                <p className="flex flex-col gap-2">
                    Total Current Balance
                </p>

                {/* <p className="total-balance-amount flex-center gap-2">
                    
                    {formatAmount(totalCurrentBalance)}
                </p> */}
                {/* 
                We also could use this syntax for more animation
                <p className="total-balance-amount flex-center gap-2">
                    <AnimatedCounter  amount={totalCurrentBalance} />
                </p>
                
                */}
                <div className="total-balance-amount flex-center gap-2">
                    <AnimatedCounter  amount={totalCurrentBalance} />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default TotalBalancebox