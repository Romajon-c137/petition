import React, { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import ButtonGroup from '@mui/material/ButtonGroup'
import RefreshIcon from '@mui/icons-material/Refresh'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import './main.css'
import TodaysDate from './TodaysDate'
import RandomSignature from './RandomSignature'
import Bplus from '../assets/image/logo444.jpg'

const Main = () => {
	const [newSignature, setNewSignature] = useState(0)
	const handleRefresh = () => {
		setNewSignature(prevNewSignature => prevNewSignature + 1)
	}

	const commonCellStyle = {
		fontSize: '14pt',
		fontFamily: "'Times New Roman', serif",
	}
	const containerRef = useRef(null)

	const handleDownloadImage = () => {
		if (containerRef.current) {
			html2canvas(containerRef.current).then(canvas => {
				const dataUrl = canvas.toDataURL()

				const blob = dataURLtoBlob(dataUrl)

				saveAs(blob, `${Name.toUpperCase()}-${LastName.toUpperCase()}.jpg`) // Измените расширение файла по вашему усмотрению
			})
		}
	}

	const dataURLtoBlob = dataUrl => {
		const arr = dataUrl.split(',')
		const mime = arr[0].match(/:(.*?);/)[1]
		const bstr = atob(arr[1])
		let n = bstr.length
		const u8arr = new Uint8Array(n)
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n)
		}
		return new Blob([u8arr], { type: mime })
	}

	const [Name, setName] = useState('')

	const handleName = event => {
		setName(event.target.value)
	}
	const [LastName, setLastName] = useState('')

	const handleLastName = event => {
		setLastName(event.target.value)
	}
	const [FinNumber, setFinNumber] = useState('')

	const handleFinNumber = event => {
		setFinNumber(event.target.value)
	}
	const [Birth, setBirth] = useState('')

	const handleBirth = event => {
		setBirth(event.target.value)
	}
	const [FinType, setFinType] = useState('FA')

	const handleFinType = event => {
		setFinType(event.target.value)
	}

	const RestState = () => {
		setName('')
		setLastName('')
		setFinNumber('')
		setBirth('')
	}

	const trimSpaces = () => {
		setName(prevName => prevName.trim())
		setLastName(prevLastName => prevLastName.trim())
		setFinNumber(prevFinNumber => prevFinNumber.trim())
		setBirth(prevBirth => prevBirth.trim())
	}

	return (
		<>
			<div className='containerr'>
				<div className='left'>
					<div className='Bplus'>
						Разработана <br /> компанией: <img src={Bplus} alt='' />
					</div>
					<div className='left_container'>
						<div className='restBtn'>
							<Button
								variant='contained'
								style={{ marginLeft: 'auto', marginRight: '0px' }}
								onClick={RestState}>
								<RefreshIcon />
							</Button>
						</div>
						<TextField
							id='outlined-basic'
							label='Фамилия'
							variant='outlined'
							type='text'
							value={LastName}
							onChange={handleLastName}
							autoComplete='family-name'
							onBlur={trimSpaces}
						/>
						<TextField
							id='outlined-basic'
							type='name'
							label='Имя'
							variant='outlined'
							value={Name}
							onChange={handleName}
							autoComplete='given-name'
							onBlur={trimSpaces}
						/>
						<TextField
							id='outlined-basic'
							label='Дата рождение'
							variant='outlined'
							type='data'
							value={Birth}
							onChange={handleBirth}
							onBlur={trimSpaces}
						/>

						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								width: '100%',
								fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
							}}>
							<FormControl fullWidth>
								<InputLabel id='demo-simple-select-label'>ФИН номер</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									label='ФИН номер'
									value={FinType}
									onChange={handleFinType}>
									<MenuItem value='FA'>FA</MenuItem>
									<MenuItem value='FN'>FN</MenuItem>
								</Select>
							</FormControl>
							{/* <select
								value={FinType}
								onChange={handleFinType}
								style={{ marginRight: '10px', padding: '5px', fontSize: '14px' }}>
								<option value='FA'>FA</option>
								<option value='FN'>FN</option>
							</select> */}
							<TextField
								style={{ width: '100%' }}
								id='outlined-basic'
								label='Номер паспорта'
								variant='outlined'
								type='number'
								value={FinNumber}
								onChange={handleFinNumber}
								onBlur={trimSpaces}
							/>
						</div>
						<ButtonGroup
							disableElevation
							variant='contained'
							aria-label='Disabled elevation buttons'>
							<Button variant='outlined' onClick={handleRefresh}>
								Новая подпись
							</Button>
							<Button onClick={handleDownloadImage}>Скачать изображение</Button>
						</ButtonGroup>
					</div>
				</div>
				<div ref={containerRef} className='WordSection1' style={{ position: 'relative' }}>
					<p className='MsoNormal' style={{ marginLeft: '283.2pt', textAlign: 'left' }}>
						<b>
							<span
								style={{
									fontSize: '14pt',
									lineHeight: '107%',
									fontFamily: "'Times New Roman', serif",
									textAlign: 'left',
								}}>
								Департаменту Консульской службы Министерство иностранных дел Кыргызской Республики
							</span>
						</b>
					</p>
					<p className='MsoNormal'>
						<b>
							<span
								style={{
									fontSize: '14pt',
									lineHeight: '107%',
								}}>
								&nbsp;
							</span>
						</b>
					</p>
					<TodaysDate />
					<p className='MsoNormal'>
						<b>
							<span
								style={{
									fontSize: '14pt',
									lineHeight: '107%',
									fontFamily: "'Times New Roman', serif",
								}}>
								&nbsp;
							</span>
						</b>
					</p>
					<p className='MsoNormal'>
						<b>
							<span
								style={{
									fontSize: '14pt',
									lineHeight: '107%',
									fontFamily: "'Times New Roman', serif",
								}}>
								&nbsp;
							</span>
						</b>
					</p>
					<p className='MsoNormal' align='center' style={{ textAlign: 'center' }}>
						<b>
							<span
								style={{
									fontSize: '14pt',
									lineHeight: '107%',
									fontFamily: "'Times New Roman', serif",
								}}>
								ХОДАТАЙСТВО
							</span>
						</b>
					</p>
					<p className='MsoNormal'>
						<b>
							<span
								style={{
									fontSize: '14pt',
									lineHeight: '107%',
									fontFamily: "'Times New Roman', serif",
								}}>
								&nbsp;
							</span>
						</b>
					</p>
					<p className='MsoNormal' style={{ textAlign: 'justify' }}>
						<span
							style={{
								fontSize: '14pt',
								lineHeight: '107%',
								fontFamily: "'Times New Roman', serif",
							}}>
							&nbsp; &nbsp;&nbsp;&nbsp; Индивидуальный предприниматель просит Вас выдать первичную
							визу сроком на 2 (два) месяца, многократно.
						</span>
					</p>
					<p className='MsoNormal' style={{ textAlign: 'justify' }}>
						<span
							style={{
								fontSize: '14pt',
								lineHeight: '107%',
								fontFamily: "'Times New Roman', serif",
							}}>
							&nbsp;
						</span>
					</p>
					<table
						className='MsoTableGrid'
						border='1'
						cellspacing='0'
						cellpadding='0'
						width='671'
						style={{ width: '503.25pt', borderCollapse: 'collapse', border: 'none' }}>
						<tr>
							{['Ф.И.О.', 'Гражданство', '№ паспорта', 'Дата рождения', 'Специальность'].map(
								(header, index) => (
									<td
										key={index}
										width={['183', '132', '104', '97', '155'][index]}
										valign='top'
										style={{
											width: ['137.55pt', '98.7pt', '77.7pt', '72.75pt', '116.55pt'][index],
											border: 'solid windowtext 1pt',
											...(index !== 0 && { borderLeft: 'none' }),
											padding: '0cm 5.4pt 0cm 5.4pt',
										}}>
										<p
											className='MsoNormal'
											align='center'
											style={{ margin: '0cm', textAlign: 'center', lineHeight: 'normal' }}>
											<b>
												<span style={commonCellStyle}>{header}</span>
											</b>
										</p>
									</td>
								),
							)}
						</tr>
						<tr>
							{[
								`${LastName.toUpperCase()} ${Name.toUpperCase()}`,
								'UZBEKISTAN',
								`FA${FinNumber}`,
								`${Birth}`,
								'Индивидуальный предприниматель',
							].map((data, index) => (
								<td
									key={index}
									width={['183', '132', '104', '97', '155'][index]}
									valign='top'
									style={{
										width: ['137.55pt', '98.7pt', '77.7pt', '72.75pt', '116.55pt'][index],
										...(index !== 0 && { borderTop: 'none', borderLeft: 'none' }),
										borderRight: 'solid windowtext 1pt',
										borderBottom: 'solid windowtext 1pt',
										padding: '0cm 5.4pt 0cm 5.4pt',
									}}>
									<p
										className='MsoNormal'
										style={{ margin: '0cm', textAlign: 'justify', lineHeight: 'normal' }}>
										<span style={commonCellStyle}>
											{index === 2 ? `${FinType}${FinNumber}` : data}
										</span>
									</p>
								</td>
							))}
						</tr>
					</table>
					<p className='MsoNormal' style={{ textAlign: 'justify' }}>
						<span
							style={{
								fontSize: '14pt',
								lineHeight: '107%',
								fontFamily: "'Times New Roman', serif",
							}}>
							&nbsp;
						</span>
					</p>
					<p className='MsoNormal' style={{ textAlign: 'justify' }}>
						<span
							style={{
								fontSize: '14pt',
								lineHeight: '107%',
								fontFamily: "'Times New Roman', serif",
							}}>
							&nbsp;
						</span>
					</p>
					<p className='MsoNormal' style={{ textAlign: 'justify', textIndent: '35.4pt' }}>
						<span
							style={{
								fontSize: '14pt',
								lineHeight: '107%',
								fontFamily: "'Times New Roman', serif",
							}}>
							Индивидуальный предприниматель{' '}
						</span>
						<span
							lang='EN-US'
							style={{
								fontSize: '14pt',
								lineHeight: '107%',
								fontFamily: "'Times New Roman', serif",
							}}>
							{Name.toUpperCase()}
						</span>{' '}
						<span
							lang='EN-US'
							style={{
								fontSize: '14pt',
								lineHeight: '107%',
								fontFamily: "'Times New Roman', serif",
								textTransform: 'uppercase',
							}}>
							{LastName.toUpperCase()}{' '}
						</span>
						<span
							lang='EN-US'
							style={{
								fontSize: '14pt',
								lineHeight: '107%',
								fontFamily: "'Times New Roman', serif",
							}}></span>
						<span
							style={{
								fontSize: '14pt',
								lineHeight: '107%',
								fontFamily: "'Times New Roman', serif",
							}}>
							{' '}
							гарантирует обеспечить свое пребывание в Кыргызской Республике в соответствии с
							Законом КР «О внешней миграции» №61 от 17.07.2000 года, с обязательным соблюдением
							общественного порядка.
						</span>
					</p>
					<p className='MsoNormal' style={{ textAlign: 'justify', textIndent: '35.4pt' }}>
						<span
							style={{
								fontSize: '14pt',
								lineHeight: '107%',
								fontFamily: "'Times New Roman', serif",
							}}>
							&nbsp;
						</span>
					</p>
					<p className='MsoNormal' style={{ textAlign: 'justify', textIndent: '35.4pt' }}>
						<span
							style={{
								fontSize: '14pt',
								lineHeight: '107%',
								fontFamily: "'Times New Roman', serif",
							}}>
							С уважением,{' '}
						</span>
						<span
							lang='EN-US'
							style={{
								textTransform: 'uppercase',
								fontSize: '14pt',
								lineHeight: '107%',
								fontFamily: "'Times New Roman', serif",
							}}>
							{Name} {LastName}
						</span>
						<div
							style={{
								position: 'absolute',
								width: '150px',
								right: '250px',
							}}>
							<RandomSignature key={newSignature} />
							{/* <img src={ images } alt='' /> */}
						</div>
					</p>
				</div>
			</div>
			<p
				style={{
					textAlign: 'center',
					fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif',
					fontSize: '12px',
					color: '#ffffff',
				}}>
				©2024 Editor of the petition
			</p>
		</>
	)
}

export default Main
