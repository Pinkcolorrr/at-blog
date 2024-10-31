import SearchIcon from '@mui/icons-material/Search';
import { FormControl, IconButton, OutlinedInput } from '@mui/material';

function SearchButton() {
  return (
    <IconButton>
      <SearchIcon />
    </IconButton>
  );
}

export function PostsFilters() {
  return (
    <form>
      <FormControl sx={{ width: '100%' }} variant='filled'>
        <OutlinedInput
          placeholder='search'
          aria-describedby='my-helper-text'
          endAdornment={<SearchButton />}
        />
      </FormControl>
    </form>
  );
}
