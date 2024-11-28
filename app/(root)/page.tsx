import HeaderBox from '@/components/HeaderBox'
import TotalBalancebox from '@/components/TotalBalancebox';


const Home = () => {
  const loggedIn = {firstname: 'Souleymane'};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstname || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalancebox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={5000375.25}
          />
        </header>
      </div>
    </section>
  )
}

export default Home