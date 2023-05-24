import { A } from "solid-start";
import { createSignal, onMount, For } from 'solid-js';
import { coding_school } from '../services/utils'
import { getSchools } from '../services/service'
import {
  flexRender,
  getCoreRowModel,
  ColumnDef,
  createSolidTable,
  getPaginationRowModel,
} from '@tanstack/solid-table'

const defaultData: coding_school[] = [
  {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  }, {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none",
    location: "may"
  },
]

const defaultColumns: ColumnDef<coding_school>[] = [
  {
    accessorKey: 'name',
    cell: info => info.getValue<string>(),
    header: () => 'Name',
  },
  {
    accessorKey: 'url',
    header: () => 'Url',
  },
  {
    accessorKey: 'courses_offered',
    header: () => 'Courses Offered',
  },
  {
    accessorKey: 'location',
    header: () => 'Location',
  },
]

export default function Home() {

  const [data, setData] = createSignal([] as coding_school[])
  // const [data, setData] = createSignal([] as coding_school[])

  // onMount(async () => {
  //   const raw_data = await getSchools();
  //   const filter_array = raw_data.map(({ name, url, courses_offered, location }) => {
  //     return ({
  //       name,
  //       url,
  //       courses_offered,
  //       location,
  //     })
  //   })
  //   setData(filter_array)
  //   console.log(filter_array)
  //
  // })

  setData(defaultData)

  const table = createSolidTable({
    get data() {
      return data()
    },
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })


  return (
    <main class="prose text-center mx-auto text-gray-700 p-4">

      <h1 class="max-6-xs text-6xl text-sky-700 font-bold uppercase my-16">
        Coding Schools In My City
      </h1>

      <table class="table">
        <thead>
          <For each={table.getHeaderGroups()}>
            {headerGroup => (
              <tr>
                <For each={headerGroup.headers}>
                  {header => (
                    <th>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </th>
                  )}
                </For>
              </tr>
            )}
          </For>
        </thead>
        <tbody>
          <For each={table.getRowModel().rows}>
            {row => (
              <tr>
                <For each={row.getVisibleCells()}>
                  {cell => (
                    <td>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
      <div class="btn-group">
        <button
          class="btn btn-primary"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          class="btn btn-secondary"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
      </div>
      <span>
        <div>Page</div>
        <strong>
          {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </strong>
      </span>
      <p class="my-4">
        <span>Home</span>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{" "}
      </p>
    </main>
  );
}
