export enum PageName {
  MAIN,
  ABOUT,
  PROJECTS,
  CONTACT
}

export const getIndex = (scrollY: number, heights: number[]) => heights.findIndex(height => height >= scrollY) ?? 0