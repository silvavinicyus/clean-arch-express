import 'reflect-metadata'
import { config } from 'dotenv'

config()

jest.spyOn(global.console, 'error').mockImplementation(() => void 0)
jest.spyOn(global.console, 'log').mockImplementation(() => void 0)
