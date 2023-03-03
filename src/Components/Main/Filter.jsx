import { useState } from "react"
import GenreItem from "./GenreItem";

function Filter() {

    const years = [];
    const date = new Date();
    const year = date.getFullYear();
    for(let i=0; i<74; i++){
        years[i]= i+1950;
    }
    const [minYear, setMinYear] = useState(1950)
    const [maxYearSelect, setMaxYearSelect] = useState(<select name="year-max" id="year-max" defaultValue={year}>{years.map(e=> <option value={e}>{e}</option>)}</select>)

    const handleMaxYear = (e) => {
        setMinYear(e.target.value)
        years.length=0;
        for(let i=0; i<=2023-parseInt(e.target.value); i++){
            years[i]= i+parseInt(e.target.value);
        }
        setMaxYearSelect(<select name="year-max" id="year-max" defaultValue={year}>{years.map(e=> <option value={e}>{e}</option>)}</select>)
    }

  return (
    <div className="filterBackground">
      <div className="filterMenu">
        <form>
          <fieldset className="filterMenuBlock year">
            <legend>Choose year:</legend>
            <label htmlFor="year-min">Choose min year:</label>
            <select name="year-min" value={minYear} onChange={handleMaxYear} id="year-min">
                <option value="1950">1950</option>
                <option value="1951">1951</option>
                <option value="1952">1952</option>
                <option value="1953">1953</option>
                <option value="1954">1954</option>
                <option value="1955">1955</option>
                <option value="1956">1956</option>
                <option value="1957">1957</option>
                <option value="1958">1958</option>
                <option value="1959">1959</option>
                <option value="1960">1960</option>
                <option value="1961">1961</option>
                <option value="1962">1962</option>
                <option value="1963">1963</option>
                <option value="1964">1964</option>
                <option value="1965">1965</option>
                <option value="1966">1966</option>
                <option value="1967">1967</option>
                <option value="1968">1968</option>
                <option value="1969">1969</option>
                <option value="1970">1970</option>
                <option value="1971">1971</option>
                <option value="1972">1972</option>
                <option value="1973">1973</option>
                <option value="1974">1974</option>
                <option value="1975">1975</option>
                <option value="1976">1976</option>
                <option value="1977">1977</option>
                <option value="1978">1978</option>
                <option value="1979">1979</option>
                <option value="1980">1980</option>
                <option value="1981">1981</option>
                <option value="1982">1982</option>
                <option value="1983">1983</option>
                <option value="1984">1984</option>
                <option value="1985">1985</option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
            <label htmlFor="year-max">Choose max year:</label>
            {maxYearSelect}
          </fieldset>
          <fieldset className="filterMenuBlock genre">
            <legend>Choose genre</legend>
            <GenreItem id="comedy">Comedy</GenreItem>
            <GenreItem id="adventure">Adventure</GenreItem>
            <GenreItem id="drama">Drama</GenreItem>
            <GenreItem id="fantasy">Fantasy</GenreItem>
            <GenreItem id="horror">Horror</GenreItem>
            <GenreItem id="thriller">Thriller</GenreItem>
          </fieldset>
          <div className="filterMenuBlock submit">
            <input type="submit" value="Submit this" className="filterSubmitButton"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Filter
