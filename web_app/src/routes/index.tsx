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
  getFilteredRowModel,
  sortingFns,
  ColumnFiltersState
} from '@tanstack/solid-table'


import {
  rankItem,
  compareItems
} from '@tanstack/match-sorter-utils'





//TODO: need to disable sorting for some columns
const defaultColumns: ColumnDef<coding_school>[] = [

  {
    accessorKey: 'name',
    header: () => 'Name',
    cell: info => info.getValue()
  },
  {
    accessorKey: 'Url',
    accessorFn: (row) => <a class="link" href={row.url}>Link</a>,
    cell: info => info.getValue()
  },
  {
    accessorKey: 'rating',
    accessorFn: (row) => <span class="badge mx-1">{row.rating}</span>,
    header: () => 'Rating',
    cell: info => info.getValue()
  },
  {
    accessorKey: 'location',
    header: () => 'Location',
  },
]

export default function Home() {

  const [sorting, setSorting] = createSignal<SortingState>([])
  const [columnFilters, setColumnFilters] = createSignal<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = createSignal<any>("")
  const [data, setData] = createSignal([] as coding_school[])

  onMount(async () => {
    const raw_data = await getSchools();
    const filter_array = raw_data.map(({ name, url, rating, location }) => {
      return ({
        name,
        url,
        rating,
        location,
      })
    })
    setData(filter_array)

  })



  const fuzzyFilter = (row: any, columnId: any, value: any, addMeta: any) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value)

    // Store the ranking info
    addMeta(itemRank)

    // Return if the item should be filtered in/out
    return itemRank.passed
  }

  const fuzzySort = (rowA: any, rowB: any, columnId: any) => {
    let dir = 0

    // Only sort by rank if the column has ranking information
    if (rowA.columnFiltersMeta[columnId]) {
      dir = compareItems(
        rowA.columnFiltersMeta[columnId]!,
        rowB.columnFiltersMeta[columnId]!
      )
    }

    // Provide an alphanumeric fallback for when the item ranks are equal
    return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir

  }


  const table = createSolidTable({
    get data() {
      return data()
    },
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      get sorting() {
        return sorting()
      },
      get globalFilter() {
        return globalFilter()
      }
    },
    onSortingChange: setSorting,
    columns: defaultColumns,
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: fuzzyFilter,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <main class="prose text-center mx-auto text-gray-700 p-4">

      <h1 class="max-6-xs text-6xl font-bold uppercase my-16">
        Coding Schools In Your City
      </h1>
      <div class="form-control">
        <label class="input-group">
          <span>Search</span>
          <input
            type="text"
            onChange={(e) => setGlobalFilter(String(e.target.value))}
            class="input input-bordered"
          />
        </label>
        <label class="label">
          Press <span class="kbd ml-1 mr-auto">Enter</span>
        </label>

      </div>
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
      {/* <form class="flex flex-col justify-center gap-3"> */}
      {/*   <h2> Fill up form below to add your school </h2> */}
      {/*   <label class="input-group input-group-vertical "> */}
      {/*     <span>name</span> */}
      {/*     <input type="text" placeholder="My Coding School" class="input input-bordered" /> */}
      {/*   </label> */}
      {/*   <label class="input-group input-group-vertical"> */}
      {/*     <span>url</span> */}
      {/*     <input type="text" placeholder="https://www.google.com" class="input input-bordered" /> */}
      {/*   </label> */}
      {/*   <label class="input-group input-group-vertical"> */}
      {/*     <span>courses offered</span> */}
      {/*     <input type="text" placeholder="Java, Python, JavaScript" class="input input-bordered" /> */}
      {/*   </label> */}
      {/*   <label class="input-group input-group-vertical"> */}
      {/*     <span>location</span> */}
      {/*     <input type="text" placeholder="Austin, TX" class="input input-bordered" /> */}
      {/*   </label> */}
      {/**/}
      {/*   <button class="btn"> */}
      {/*     Submit */}
      {/*   </button> */}
      {/* </form> */}
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
