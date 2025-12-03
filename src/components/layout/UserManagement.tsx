import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useAuth } from '../../context/AuthContext';
import { demoUsers } from '../../context/AuthContext';

const UserManagement = () => {
    const [users, setUsers] = useState(demoUsers); 
    const { user: currentUser } = useAuth();

    const handleRoleChange = (userId, newRole) => {
        console.log(`Updating user ${userId} to role: ${newRole}`);
        const updatedUsers = users.map(user => 
            user.id === userId ? { ...user, role: newRole } : user
        );
        setUsers(updatedUsers);
    };

    const getRoleVariant = (role) => {
        switch (role) {
            case 'super_admin':
                return 'destructive';
            case 'admin':
                return 'default';
            case 'alumni':
                return 'secondary';
            case 'student':
                return 'outline';
            default:
                return 'default';
        }
    };

    return (
        <Card className="p-6">
            <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                    Manage all platform users, their roles, and access levels.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user.id}>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-2">
                                        <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                                        <span>{user.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <Badge variant={getRoleVariant(user.role)}>
                                        {user.role.replace('_', ' ').toUpperCase()}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    {currentUser?.role === 'super_admin' && user.role !== 'super_admin' && (
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            onClick={() => handleRoleChange(user.id, 'admin')}
                                        >
                                            Promote to Admin
                                        </Button>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default UserManagement;