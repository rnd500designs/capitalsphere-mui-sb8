import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Cards: React.FC = () => {
  return (
    <div>
      <h1>Cards Page</h1>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Card Title
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Card Content
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
