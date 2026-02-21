import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { mockUser } from "@/data/mockUser";
import { mockBookings } from "@/data/mockBookings";

const SECTIONS = [
	{ key: "profile", label: "Datos de usuario" },
	{ key: "bookings", label: "Reservas" },
];

const UserProfile = () => {
	const [user, setUser] = useState(mockUser);
	const [editMode, setEditMode] = useState(false);
	const [showPasswordDialog, setShowPasswordDialog] = useState(false);
	const [form, setForm] = useState({
		name: user.name,
		email: user.email,
		phone: user.phone,
	});
	const [activeSection, setActiveSection] = useState("profile");

	const handleEdit = () => setEditMode(true);
	const handleCancel = () => {
		setEditMode(false);
		setForm({ name: user.name, email: user.email, phone: user.phone });
	};
	const handleSave = () => {
		setUser({ ...user, ...form });
		setEditMode(false);
	};

	return (
		<div className="max-w-4xl mx-auto py-10 px-4">
			<h1 className="text-2xl font-bold mb-6">Perfil de Usuario</h1>
			<div className="flex flex-col md:flex-row gap-8">
				{/* Sidebar menu */}
				<nav className="md:w-56 mb-6 md:mb-0">
					<ul className="space-y-2">
						{SECTIONS.map((section) => (
							<li key={section.key}>
								<button
									className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
										activeSection === section.key
											? "bg-primary text-primary-foreground"
											: "bg-muted text-foreground hover:bg-accent"
									}`}
									onClick={() => setActiveSection(section.key)}
									aria-current={
										activeSection === section.key ? "page" : undefined
									}
								>
									{section.label}
								</button>
							</li>
						))}
					</ul>
				</nav>
				{/* Content */}
				<div className="flex-1">
					{activeSection === "profile" && (
						<div>
							<div className="flex items-center gap-6 mb-8">
								<Avatar>
									<AvatarImage src={user.avatar} alt={user.name} />
									<AvatarFallback>
										{user.name.split(" ").map((n) => n[0]).join("")}
									</AvatarFallback>
								</Avatar>
								<div>
									<div className="text-lg font-semibold">{user.name}</div>
									<div className="text-sm text-muted-foreground">
										{user.email}
									</div>
								</div>
							</div>
							<form
								className="space-y-4"
								onSubmit={(e) => {
									e.preventDefault();
									handleSave();
								}}
							>
								{/* Nombre */}
								<label className="block text-sm font-medium mb-1" htmlFor="profile-name">Nombre</label>
								<Input
									id="profile-name"
									value={form.name}
									disabled={!editMode}
									onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
									required
								/>
								{/* Correo electrónico */}
								<label className="block text-sm font-medium mb-1" htmlFor="profile-email">Correo electrónico</label>
								<Input
									id="profile-email"
									value={form.email}
									disabled={!editMode}
									onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
									required
								/>
								{/* Teléfono */}
								<label className="block text-sm font-medium mb-1" htmlFor="profile-phone">Teléfono</label>
								<Input
									id="profile-phone"
									value={form.phone}
									disabled={!editMode}
									onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
								/>
								<div className="flex gap-3 mt-4">
									{!editMode ? (
										<Button type="button" onClick={handleEdit}>
											Editar información
										</Button>
									) : (
										<>
											<Button type="submit">Guardar</Button>
											<Button
												type="button"
												variant="outline"
												onClick={handleCancel}
											>
												Cancelar
											</Button>
										</>
									)}
									<Button
										type="button"
										variant="secondary"
										onClick={() => setShowPasswordDialog(true)}
									>
										Cambiar contraseña
									</Button>
									<Button type="button" variant="destructive">
										Cerrar sesión
									</Button>
								</div>
							</form>
							{/* Dialog para cambiar contraseña */}
							{showPasswordDialog && (
								<Dialog
									open={showPasswordDialog}
									onOpenChange={setShowPasswordDialog}
								>
									<div className="p-6">
										<h2 className="text-lg font-bold mb-4">
											Cambiar contraseña
										</h2>
										<label className="block text-sm font-medium mb-1" htmlFor="current-password">Contraseña actual</label>
										<Input id="current-password" type="password" required />
										<label className="block text-sm font-medium mb-1" htmlFor="new-password">Nueva contraseña</label>
										<Input id="new-password" type="password" required />
										<label className="block text-sm font-medium mb-1" htmlFor="confirm-password">Confirmar nueva contraseña</label>
										<Input id="confirm-password" type="password" required />
										<div className="flex gap-3 mt-4">
											<Button>Cambiar</Button>
											<Button variant="outline" onClick={() => setShowPasswordDialog(false)}>Cancelar</Button>
										</div>
									</div>
								</Dialog>
							)}
						</div>
					)}
					{activeSection === "bookings" && (
						<div>
							<h2 className="text-xl font-bold mb-4">Reservas</h2>
							{mockBookings.length === 0 ? (
								<p className="text-muted-foreground">
									No tienes reservas registradas.
								</p>
							) : (
								<ul className="space-y-4">
									{mockBookings.map((booking) => (
										<li
											key={booking.id}
											className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
										>
											<div>
												<div className="font-semibold text-lg">
													{booking.title}
												</div>
												<div className="text-sm text-muted-foreground">
													{booking.location}
												</div>
												<div className="text-sm">
													Fecha: {booking.date}
												</div>
											</div>
											<div className="text-sm font-medium">
												<span
													className={`px-3 py-1 rounded-full ${
														booking.status === "Confirmada"
															? "bg-green-100 text-green-700"
															: booking.status === "Pendiente"
															? "bg-yellow-100 text-yellow-700"
															: "bg-red-100 text-red-700"
													}`}
												>
													{booking.status}
												</span>
											</div>
										</li>
									))}
								</ul>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserProfile;

