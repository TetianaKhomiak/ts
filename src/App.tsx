import React from "react";
const App = () => {
  enum GridFilterTypeEnum {
    Match = "Match",
    Range = "Range",
    SetValues = "SetValues",
  }

  type GridFilterMatch<T extends number> = {
    type: GridFilterTypeEnum;
    filter: T;
  };

  type GridFilterValue<T> = {
    type: GridFilterTypeEnum;
    filter: Extract<T, string | number>;
    filterTo?: Extract<T, string | number>;
  };

  type GridFilterSetValues<T> = {
    type: GridFilterTypeEnum;
    values: T[];
  };

  interface Movie {
    title: string;
    year: number;
    rating: number;
    awards: string[];
    category: string;
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
      this.filterState.search = {
        values: [search],
        type: GridFilterTypeEnum.SetValues,
      };
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
      if (!search || search.type !== GridFilterTypeEnum.SetValues) return true;
      return search.values.includes(movie.title);
    }

    private matchesYear(movie: Movie, year?: GridFilterValue<number>): boolean {
      if (!year || year.type !== GridFilterTypeEnum.Range) return true;
      return (
        movie.year >= year.filter &&
        (!year.filterTo || movie.year <= year.filterTo)
      );
    }

    private matchesRating(
      movie: Movie,
      rating?: GridFilterMatch<number>
    ): boolean {
      if (!rating || rating.type !== GridFilterTypeEnum.Match) return true;
      return movie.rating === rating.filter;
    }

    private matchesAwards(
      movie: Movie,
      awards?: GridFilterSetValues<string>
    ): boolean {
      if (!awards || awards.type !== GridFilterTypeEnum.SetValues) return true;
      return awards.values.every((award) => movie.awards.includes(award));
    }
  }

  class CategoryList {
    private categories: MovieCategory[];
    private filterState: CategoryFilters = {};
    private movieList: MovieList;

    constructor(categories: MovieCategory[], movieList: MovieList) {
      this.categories = categories;
      this.movieList = movieList;
    }

    applySearchValue(search: string) {
      this.filterState.search = {
        values: [search],
        type: GridFilterTypeEnum.SetValues,
      };
    }

    filterCategories(): Movie[] {
      const search = this.filterState.search;

      return this.categories.flatMap((category) => {
        if (!search || search.type !== GridFilterTypeEnum.SetValues) {
          return [];
        }

        if (search.values.some((value) => category.title.includes(value))) {
          return this.movieList.filterMovies().filter((movie) => {
            return movie.category === category.title;
          });
        }

        return [];
      });
    }
  }

  const movies: Movie[] = [
    {
      title: "Movie A",
      year: 2020,
      rating: 8.5,
      awards: ["Oscar"],
      category: "Action",
    },
    {
      title: "Movie B",
      year: 2019,
      rating: 7.8,
      awards: ["Golden Globe"],
      category: "Action",
    },
    {
      title: "Movie",
      year: 2018,
      rating: 8,
      awards: ["Golden Globe", "Oscar"],
      category: "Comedy",
    },
    {
      title: "Movie C",
      year: 2021,
      rating: 9.0,
      awards: [],
      category: "Drama",
    },
  ];

  const movieList = new MovieList(movies);

  //1. filtering by title
  movieList.applySearchValue("Movie B");
  const filteredByName = movieList.filterMovies();
  console.log("Filtered by Name:", filteredByName);

  // 2. filtering by year
  // movieList.applyFiltersValue({
  //   year: { type: GridFilterTypeEnum.Range, filter: 2018, filterTo: 2019 },
  // });
  // const filteredByYear = movieList.filterMovies();
  // console.log("Filtered by Year:", filteredByYear);

  // 3. filtering by raiting
  // movieList.applyFiltersValue({
  //   rating: { type: GridFilterTypeEnum.Match, filter: 8 },
  // });
  // const filteredByRating = movieList.filterMovies();
  // console.log("Filtered by Rating:", filteredByRating);

  //4. filtering by awards
  // movieList.applyFiltersValue({
  //   awards: { type: GridFilterTypeEnum.SetValues, values: ["Oscar"] },
  // });
  // const filteredByAwards = movieList.filterMovies();
  // console.log("Filtered by Awards:", filteredByAwards);

  const categories: MovieCategory[] = [
    { title: "Action", movies: movies },
    { title: "Comedy", movies: movies },
    { title: "Drama", movies: movies },
  ];

  //5. filtering by categories
  const categoryList = new CategoryList(categories, movieList);
  categoryList.applySearchValue("Action");
  const filteredCategories = categoryList.filterCategories();
  console.log("Filtered by Category:", filteredCategories);

  return <div>App</div>;
};
export default App;
