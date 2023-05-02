import { Link } from "react-router-dom"
import { AiOutlineBook, AiOutlineFieldTime  } from 'react-icons/ai'
import { VscListUnordered  } from 'react-icons/vsc'
import { BsClockHistory, BsCurrencyDollar, BsJournalBookmark, BsListUl } from 'react-icons/bs'


const Navbar = () => {

  return ( 
    <header>
      <div className="container">
        <div className="button__wrapper">
          <div className="button">
            <BsListUl />
          </div>
          <div className="button">
            <BsJournalBookmark />
          </div>
          <div className="button">
            <BsCurrencyDollar />     
          </div>
        </div>
        <Link to="/">
            Gumption
        </Link>
        <div className="button__wrapper">
          <div className="button--label--high">Record</div>
          <div className="button">
            <BsClockHistory />     
          </div>
        </div>


      </div>
    </header>
  )

}

export default Navbar