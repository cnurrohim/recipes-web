export const createColumnSpanSequences = (itemsLength) => {
  const spanPairs = [
    ["col-span-1 lg:col-span-12 md:col-span-8 sm:col-span-4"],
    [
      "col-span-1 lg:col-span-8 md:col-span-4 sm:col-span-2",
      "col-span-1 lg:col-span-4 md:col-span-4 sm:col-span-2",
    ],
    [
      "col-span-1 lg:col-span-6 md:col-span-5 sm:col-span-2",
      "col-span-1 lg:col-span-6 md:col-span-3 sm:col-span-2",
    ],
    [
      "col-span-1 lg:col-span-4 md:col-span-5 sm:col-span-2",
      "col-span-1 lg:col-span-4 md:col-span-3 sm:col-span-2",
      "col-span-1 lg:col-span-4 md:col-span-8 sm:col-span-4",
    ],
    [
      "col-span-1 lg:col-span-4 md:col-span-3 sm:col-span-2",
      "col-span-1 lg:col-span-8 md:col-span-5 sm:col-span-2",
    ],
  ]
  spanPairs.sort(() => Math.random() - 0.5)
  let sequences = []
  if (itemsLength == 0) return sequences.concat(...spanPairs, ...spanPairs)

  while (sequences.length < itemsLength) {
    sequences = sequences.concat(...spanPairs)
  }

  return sequences
}

export const gridSystems =
  "grid-cols-1 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4"

export const gapSystems = "xl:gap-6 lg:gap-6 md:gap-3 sm:gap-3 gap-6"

export const spanSystems =
  "col-span-1 xl:col-span-12 lg:col-span-12 md:col-span-8 sm:col-span-4"
