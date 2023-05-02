
import { VscAdd, VscChevronDown, VscEllipsis, VscChevronRight } from 'react-icons/vsc';
import NewClient from './NewClient';


export default function ClientNav({ clients }) {
console.log(clients)

  return (
    <>
      <div className="clientNav">
        <div className="client__wrapper">
          <div className="client__header">
            <div className="button--tab">
              <VscChevronDown />
            </div>
            <span>Active</span>
            <div className="button--tab--hidden button--tab">
              <VscEllipsis />
            </div>
            <div className="button--tab--hidden button--tab">
              <VscAdd />
            </div>
          </div>
          <div className="client__tab__wrapper">
            <div className="client__tab__dropdownMarker" />
            {clients && clients.sort((a, b) => a.title.localeCompare(b.title)).map((client) => (
              <div className="client__tab">
                <div className="button--tab">
                  <VscChevronRight />
                </div>
                <span>{client.title}</span>
                <div className="button--tab--hidden button--tab">
                  <VscEllipsis />
                </div>
                <div className="button--tab--hidden button--tab">
                  <VscAdd />
                </div>
              </div>
            ))}
            <NewClient />
          </div>
        </div>
        <div className="client__wrapper">
          <div className="client__header">
            <div className="button--tab">
              <VscChevronDown />
            </div>
            <span>Archived</span>
            <div className="button--tab--hidden button--tab">
              <VscEllipsis />
            </div>
            <div className="button--tab--hidden button--tab">
              <VscAdd />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
