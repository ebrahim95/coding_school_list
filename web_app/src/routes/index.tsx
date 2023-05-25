import { A } from "solid-start";
import { createSignal, onMount, For, Show } from 'solid-js';
import { coding_school } from '../services/utils'
import { getSchools } from '../services/service'
import {
  flexRender,
  getCoreRowModel,
  ColumnDef,
  createSolidTable,
  SortingState,
  getSortedRowModel,
  getPaginationRowModel,
} from '@tanstack/solid-table'

const defaultData: coding_school[] = [
  {
    name: 'joe',
    url: 'google..com',
    courses_offered: "none coco",
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
    cell: info => info.getValue<string>().split(" ").map(word => <span class="badge mx-1">{word}</span>),
  },
  {
    accessorKey: 'location',
    header: () => 'Location',
  },
]

export default function Home() {

  const [data, setData] = createSignal([] as coding_school[])
  const [sorting, setSorting] = createSignal<SortingState>([])
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
    state: {
      get sorting() {
        return sorting()
      },
    },
    onSortingChange: setSorting,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })


  return (
    <main class="prose text-center mx-auto text-gray-700 p-4">

      <h1 class="max-6-xs text-6xl font-bold uppercase my-16">
        Coding Schools In My City
      </h1>

      <table>
        <thead>
          <For each={table.getHeaderGroups()}>
            {headerGroup => (
              <tr>
                <For each={headerGroup.headers}>
                  {header => (
                    <th colSpan={header.colSpan}>
                      <Show when={!header.isPlaceholder}>
                        <div
                          class={
                            header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : undefined
                          }
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      </Show>
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
      <form class="flex flex-col justify-center gap-3">
        <h2> Fill up form below to add your school </h2>
        <label class="input-group input-group-vertical ">
          <span>name</span>
          <input type="text" placeholder="My Coding School" class="input input-bordered" />
        </label>
        <label class="input-group input-group-vertical">
          <span>url</span>
          <input type="text" placeholder="https://www.google.com" class="input input-bordered" />
        </label>
        <label class="input-group input-group-vertical">
          <span>courses offered</span>
          <input type="text" placeholder="Java, Python, JavaScript" class="input input-bordered" />
        </label>
        <label class="input-group input-group-vertical">
          <span>location</span>
          <input type="text" placeholder="Austin, TX" class="input input-bordered" />
        </label>

        <button class="btn">
          Submit
        </button>
      </form>
      {/* <p class="my-4"> */}
      {/*   <span>Home</span> */}
      {/*   {" - "} */}
      {/*   <A href="/about" class="text-sky-600 hover:underline"> */}
      {/*     About Page */}
      {/*   </A>{" "} */}
      {/* </p> */}
    </main>
  );
}
