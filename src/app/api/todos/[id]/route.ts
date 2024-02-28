import { NextRequest, NextResponse } from "next/server"; 
import { connect } from "@/dbConfig/db" 
import Todo from "@/models/todos" 

connect();

export async function DELETE(request: NextRequest) {
    try {
        const id = request.nextUrl.pathname.split("/").pop();

        await Todo.deleteOne({id})

        return NextResponse.json({ msg: "Todo deleted", success: true})
    } catch (error) {
        return NextResponse.json({ msg: "Issues happened!"}, {status: 500} )
    }
} 

export async function PUT(request: NextRequest) {
    try { 
        const id = request.nextUrl.pathname.split("/").pop(); 

        const reqBody = await request.json()
        const { desc, completed } = reqBody

        await Todo.findOneAndUpdate({ id }, { desc, completed });

        return NextResponse.json({ msg: "Todo updated", success: true })
    } catch (error) {
        return NextResponse.json({ msg: "Issues happened!"}, {status: 500} )
    }
} 