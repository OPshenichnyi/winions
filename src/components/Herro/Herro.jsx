import ButtonLogin from "../ButtonLogin/ButtonLogin"
import ButtonRegister from "../ButtonRegister/ButtonRegister"

const Herro = () => {
  return (
      <div className="ContainerHerro">
          <div className="Title">
        <h1>The first League of Legends <br />
          tool to actually help you <br />
          win more games</h1>
          </div>
          <div className="DiscriptionTitle">
              <p>
              A personalized analytics report that provides you with insights
              into your perfomance and how to improve. Get data driven recommendations delivered 
              straight to your email so you can focus on improving your gameplay while do the work for you.
              </p>
      </div>
      <div>
      <ButtonLogin />
      <ButtonRegister/>
      </div>
    </div>
  )
}

export default Herro