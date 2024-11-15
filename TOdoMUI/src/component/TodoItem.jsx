import {
    Card,
    CardActions,
    CardContent,
    Typography,
    Button,
} from "@mui/material";
import React from "react";

const TodoItem = ({ todo, fetchTodoDetail }) => {
    // console.log(todo)
    return (
        <Card
            sx={{
                width: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <CardContent>
                <Typography variant="h5" color={"text.secondary"}>
                    {todo.todo}
                </Typography>
            </CardContent>

            <CardActions>
                <Button onClick={() => fetchTodoDetail(todo?.id )}
                    sx={{
                        backgroundColor: "black",
                        color: "white",
                        opacity: "0.75",
                        "&:hover": {
                            backgroundColor: "black",
                            color: "white",
                            opacity: "1",
                        },
                    }}
                >
                    Show details
                </Button>
            </CardActions>
        </Card>
    );
};

export default TodoItem;
