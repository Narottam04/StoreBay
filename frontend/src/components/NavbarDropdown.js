import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavbarDropdown({userInfo}) {
    console.log(userInfo)
  return (
    <Menu as="div" className="relative hidden lg:inline-block text-left z-50">
      <div>
        <Menu.Button className="ml-3 mt-2">
            <div  className="flex flex-row items-center">
                    <img
                        src={`https://avatars.dicebear.com/api/initials/${userInfo.name}.svg`}
                        alt
                        className="h-10 w-10 bg-gray-200 border rounded-full"
                    />
                    <ChevronDownIcon className='w-4 h-4 text-black' />
            </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/profile`}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  User Profile
                </Link>
              )}
            </Menu.Item>
            {
                userInfo.isAdmin &&
                <Menu.Item>
                {({ active }) => (
                    <Link
                    to={`/admin`}
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    Admin Panel
                    </Link>
                )}
                </Menu.Item>
            }
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
