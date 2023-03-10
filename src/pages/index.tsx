import Head from 'next/head'
import Table from 'react-bootstrap/Table'
import { v4 as uuidv4 } from 'uuid'
import styles from '@/styles/Home.module.css'
import TableRow from '@/features/table/components/TableRow'
import DropdownMenu from '@/features/table/components/DropdownMenu'
import useIndex from '@/hooks/useIndex'

export default function Home() {
  const { currentSeason, handleClick, data, isLoading } = useIndex()

  console.log(data)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <DropdownMenu func={handleClick} currentSeason={currentSeason} />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Match date</th>
              <th>Stadium name</th>
              <th>Team Home</th>
              <th>Team Away</th>
              <th>Half-time score</th>
              <th>Results</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && data ? (
              data.schedules.map((elem) => {
                return (
                  <TableRow
                    id={elem.sport_event.id}
                    date={elem.sport_event.start_time}
                    stadium={elem.sport_event.venue.name}
                    team1={elem.sport_event.competitors[0].name}
                    team2={elem.sport_event.competitors[1].name}
                    result={elem.sport_event_status}
                    key={uuidv4()}
                  />
                )
              })
            ) : (
              <tr>
                <td colSpan={6} className="text-center">
                  Loading...
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </main>
    </>
  )
}
