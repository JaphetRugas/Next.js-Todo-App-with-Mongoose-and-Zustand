import { NextRequest, NextResponse } from "next/server"; 
import { connect } from "@/dbConfig/db" 
import Todo from "@/models/todos"
import { v4 } from "uuid"

connect();

export async function GET(request: NextRequest) {
    try {
        const todos = await Todo.find({}).sort({ createdAt: -1 });

        return NextResponse.json({ msg: "Found all todos", success: true, todos })
    } catch (error) {
        return NextResponse.json({ msg: "Issues happened!"}, {status: 500} )
    }
} 

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {desc} = reqBody
        
        const newTodo = new Todo({
            id: v4(),
            desc,
            completed: false
        })

        const saveTodo = await newTodo.save()

        return NextResponse.json({ msg: "Todo Added", success: true, saveTodo })
        
    } catch(error) {
        return NextResponse.json({ msg: "Issues happened!"}, {status: 500} ) 
    }
}

export async function DELETE(request: NextRequest) {
    try {
        await Todo.deleteMany();
        return NextResponse.json({ msg: "Todo cleared", success: true }) 

    } catch(error) {
        return NextResponse.json({ msg: "Issues happened!"}, {status: 500} )  
    }
}
