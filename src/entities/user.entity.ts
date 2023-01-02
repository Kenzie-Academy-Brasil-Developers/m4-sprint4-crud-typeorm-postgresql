import { hashSync } from 'bcryptjs'
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    BeforeInsert,
    BeforeUpdate
} from "typeorm";

@Entity("users")
class User {
    
    @Column({ length: 120 })
    name: string 
    
    @Column({ length: 60, unique: true })
    email: string 
    
    @Column()
    password: string
    
    @Column()
    isAdm: boolean
    
    @Column({ default: true })
    isActive: boolean
    
    @CreateDateColumn()
    createdAt: Date
    
    @UpdateDateColumn()
    updatedAt: Date
    
    @PrimaryGeneratedColumn("uuid")
    id: string

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }
}

export { User }