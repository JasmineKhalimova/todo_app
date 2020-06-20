import app from './app';

const { PORT } = app;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));