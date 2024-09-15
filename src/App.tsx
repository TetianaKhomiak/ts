import React from "react";
const App = () => {
  enum GridFilterTypeEnum {
    Match = "Match",
    Range = "Range",
    SetValues = "SetValues",
  }

  // type GridFilterMatch<T> = {
  //   filter: Extract<T, string | number>;
  // };
  type GridFilterMatch<T extends number> = {
    filter: T;
  };

  type GridFilterValue<T> = {
    type: GridFilterTypeEnum;
    filter: Extract<T, string | number>;
    filterTo?: Extract<T, string | number>;
  };

  type GridFilterSetValues<T> = {
    values: T[];
  };

  interface Movie {
    title: string;
    year: number;
    rating: number;
    awards: string[];
  }

  interface MovieCategory {
    title: string;
    movies: Movie[];
  }

  interface MovieFilters {
    search?: GridFilterSetValues<string>;
    year?: GridFilterValue<number>;
    rating?: GridFilterMatch<number>;
    awards?: GridFilterSetValues<string>;
  }

  interface CategoryFilters {
    search?: GridFilterSetValues<string>;
  }

  class MovieList {
    private movies: Movie[];
    private filterState: MovieFilters = {};

    constructor(movies: Movie[]) {
      this.movies = movies;
    }

    applySearchValue(search: string) {
      this.filterState.search = { values: [search] };
    }

    applyFiltersValue(filters: MovieFilters) {
      this.filterState = { ...this.filterState, ...filters };
    }

    filterMovies(): Movie[] {
      return this.movies.filter(this.matchesFilters.bind(this));
    }

    private matchesFilters(movie: Movie): boolean {
      const { search, year, rating, awards } = this.filterState;

      return (
        this.matchesSearch(movie, search) &&
        this.matchesYear(movie, year) &&
        this.matchesRating(movie, rating) &&
        this.matchesAwards(movie, awards)
      );
    }

    private matchesSearch(
      movie: Movie,
      search?: GridFilterSetValues<string>
    ): boolean {
      if (!search) return true;
      //return search.values.some((value) => movie.title.includes(value));
      return search.values.includes(movie.title);
    }

    private matchesYear(movie: Movie, year?: GridFilterValue<number>): boolean {
      if (!year) return true;
      return (
        movie.year >= year.filter &&
        (!year.filterTo || movie.year <= year.filterTo)
      );
    }

    private matchesRating(
      movie: Movie,
      rating?: GridFilterMatch<number>
    ): boolean {
      if (!rating) return true;
      return movie.rating === rating.filter;
    }

    private matchesAwards(
      movie: Movie,
      awards?: GridFilterSetValues<string>
    ): boolean {
      if (!awards) return true;
      return awards.values.every((award) => movie.awards.includes(award));
    }
  }

  class CategoryList {
    private categories: MovieCategory[];
    private filterState: CategoryFilters = {};

    constructor(categories: MovieCategory[]) {
      this.categories = categories;
    }

    applySearchValue(search: string) {
      this.filterState.search = { values: [search] };
    }

    filterCategories(): Movie[] {
      return this.categories.flatMap((category) => {
        const { search } = this.filterState;

        if (!search) {
          return [];
        }

        if (search.values.some((value) => category.title.includes(value))) {
          return category.movies.filter((movie) =>
            search.values.some((searchValue) =>
              movie.title.includes(searchValue)
            )
          );
        }

        return [];
      });
    }
  }

  const movies: Movie[] = [
    { title: "Movie A", year: 2020, rating: 8.5, awards: ["Oscar"] },
    { title: "Movie B", year: 2019, rating: 7.8, awards: ["Golden Globe"] },
    {
      title: "Movie",
      year: 2018,
      rating: 8,
      awards: ["Golden Globe", "Oscar"],
    },
    { title: "Movie C", year: 2021, rating: 9.0, awards: [] },
  ];

  const movieList = new MovieList(movies);

  // 1. filtering by title
  // movieList.applySearchValue("Movie B");
  // const filteredByName = movieList.filterMovies();
  // console.log("Filtered by Name:", filteredByName);

  // 2. filtering by year
  // movieList.applyFiltersValue({
  //   year: { type: GridFilterTypeEnum.Range, filter: 2021, filterTo: undefined },
  // });
  // const filteredByYear = movieList.filterMovies();
  // console.log("Filtered by Year:", filteredByYear);

  // 3. filtering by raiting
  // movieList.applyFiltersValue({
  //   rating: { filter: 9.0 },
  // });
  // const filteredByRating = movieList.filterMovies();
  // console.log("Filtered by Rating:", filteredByRating);

  //4. filtering by awards
  // movieList.applyFiltersValue({
  //   awards: { values: ["Oscar"] },
  // });
  // const filteredByAwards = movieList.filterMovies();
  // console.log("Filtered by Awards:", filteredByAwards);

  const categories: MovieCategory[] = [
    { title: "Movie A", movies: movies },
    { title: "Movie B", movies: movies },
  ];

  const categoryList = new CategoryList(categories);

  // 1. filtering by title
  // categoryList.applySearchValue("Movie A");
  // const filteredCategories = categoryList.filterCategories();
  // console.log("Filtered Categories:", filteredCategories);

  return <div>App</div>;
};
export default App;
