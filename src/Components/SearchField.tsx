import React from 'react';
import { IconButton, Paper, InputBase, SvgIcon } from '@mui/material';

const SearchField: React.FC = () => {
  return (
    <Paper
      variant="outlined"
      sx={{ display: 'flex', alignItems: 'center', maxWidth: 600, m: "10px 0 40px 0" }}
    >
      <IconButton disabled sx={{ px: '20px', py: '15px'}}>
        <SvgIcon sx={{ fontSize: 20 }}>
          <path d="M15.7832 14.3911L20 18.6069L18.6069 20L14.3911 15.7832C12.8224 17.0407 10.8713 17.7246 8.86088 17.7218C3.96968 17.7218 0 13.7521 0 8.86088C0 3.96968 3.96968 0 8.86088 0C13.7521 0 17.7218 3.96968 17.7218 8.86088C17.7246 10.8713 17.0407 12.8224 15.7832 14.3911ZM13.8082 13.6605C15.0577 12.3756 15.7555 10.6532 15.7527 8.86088C15.7527 5.05267 12.6681 1.96909 8.86088 1.96909C5.05267 1.96909 1.96909 5.05267 1.96909 8.86088C1.96909 12.6681 5.05267 15.7527 8.86088 15.7527C10.6532 15.7555 12.3756 15.0577 13.6605 13.8082L13.8082 13.6605Z" />
        </SvgIcon>
      </IconButton>
      <InputBase
        placeholder="Search..."
      />
    </Paper>
  );
}

export default SearchField;
